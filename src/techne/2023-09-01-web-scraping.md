---
permalink: '/techne/web-scraping/'
title: "Webscraping in the Digital Humanities: An Introduction"
authors: [rseow]
projects:
date: 1990-09-03
teaser: "A short introduction to web scraping by one of our former lab interns, who's recently has revived and polished some code we wrote for a project a few years back."
---

## Background
Hi Lit Lab! 👋 This is Riley, a CESTA intern from summer 2020. In the process of fumbling around recently with some of my old coding projects, I came across a Python webscraper that I wrote for the Lit Lab during my internship. Wanting to brush up on my skills — and improve some of the truly horrible code I wrote that summer — I spent a week researching webscraping while simplifying and improving my code. 

The scraper in question, which takes data from roughly 20,000 URLs on [Shmoop], previously ran with multiple crashes over 6-8 hours to complete its data collection and parsing. It now runs in around 10 minutes with no crashes on my Macbook Air. What I learned about webscraping from this project is the focus of this article. While I am still a beginner, I hope to prove useful in some way to those similarly interested in the application of webscraping to projects in the digital humanities.

---

## The Web as Data
To leverage the internet as a data resource in your research project — to use it as an almost infinitely vast collection of online archives, digital library systems, independent articles and photographs, and other results gleaned from curated Google searches — is to recognize that the web is simply a very large set of loosely interconnected, data-rich text files from which information can be mined. 

With this perspective, curating and culling the information you need from the web-as-database can be reframed as a matter of efficiently searching and sorting through large numbers of data-rich text files. What kinds of text files are these? Because [a common way to conceptualize webpage code][tripartite] involves separating it into structured information (HTML), style (CSS), and function (Javascript), the process of searching and sorting for information on the web will usually only involve the HTML. (Consider that hitting `Ctrl+S` in your browser will download webpage content to your computer as a .html or .mhtml file.) This search and sort process can be automated by writing your own code, which is called webscraping. 

### Purpose of Scraping
Webscraping is the process of taking data from the web, usually in large quantities. Scraper code will set up a connection with the server (aka the website's API) and request data about one — or more likely, many — webpages, which it can then parse for particular information the researcher needs. 

One does not have to look far to see the relevance and power webscraping can provide to digital humanities projects across the board: want to search through the New Yorker's digital archive for all articles on Philip Roth? Download all of Trump's 2017 tweets posted between 2:00 and 7:00am for sentiment analysis? Create a list of all the characters in all the novels summarized on Sparknotes? Webscraping offers the digital humanities researcher a way to automate and customize their data collection process, with large quantities of information ('big data') on the web as their resource. 

### Scraping Overview
The basic process of building a webscraper:

#### 1. Establish a connection with the website server and request to download the page HTML

In order to scrape resources, you must access them first. To do this, you will almost definitely be using your computer to send an [HTTP GET request][get] to the server of the website you want to scrape. As its name implies, this will request to `get` (download) the HTML of a webpage. In Python, a common webscraping language and the one I use throughout this article, perhaps the simplest way to make `GET` requests is to use the `requests` library.

```python
import requests

request = requests.get("www.example.com")
print(request.text)
```

With the requests library, the request comes back as a *response*, which we generally want to view as text—the html content of the website as it was returned to us. (In actual use, you'd process this text, not print it out!)

Making a request in this way is practically speaking, very similar to viewing the page manually in a web browser (which, behind the scenes, is making very similar requests to the server), with the dual advantages that you have more direct access to the raw html to process into data, and the speed at which you can make requests (which is limited chiefly by the speed at which the server can respond to each request).

One important caveat: websites are designed to support various amounts of web traffic, from a few simultaneous users (your personal webpage) to hundreds of thousands or even millions (google). With a few lines of code, however, it's possible to submit *lots* of requests very, very quickly, which is essentially a very primative [DoS attack][dos], where you swamp a server with requests, bogging down legitimate users' requests with thousands (or millions) of spurious ones. That's not as bad as it sounds—any remotely reasonable web server in 2023 will detect all of your requests as coming from the same place, and simply block them all, but it's still a drain on resources and, at a minimum, impolite (for them) and ineffective (for you, since you don't get the web content you wanted). More on managing this below.

#### 2. Use a parsing library to systematically extract information from each page

Parsing is the heart of webscraping. It involves systematically going through a webpage's HTML code structure in order to extract needed information. The essence of parsing comes down to effective querying — it is necessary to understand how HTML files are structured in order to identify unique features within that structure and isolate needed information accordingly. The power of webscraping as an automated process can be seen when parsing is executed algorithmically across many webpages, usually with similar HTML structures and within the same domain. For example, wikipedia pages for novels often have an infobox with some summary information about the novel (see, for example, [Beloved][beloved]), which contains an html table, with rows that look like this: 
```
<tr><th scope="row" class="infobox-label">Language</th><td class="infobox-data">English</td></tr>
```

By looking for similar patterns of text across the html for a list of wikipedia pages, it's not too difficult to start to build an automated collection of metadata information for a corpus of novel (at least, where that information is on wikipedia).

#### 3. Write the information to an output file, like a .csv

The final step of scraping is storing your data for analysis. This is often the simplest step, because data should already be stored in local variables throughout parsing. Two common output file types for exporting data are [.json][json] and [.csv][csv], as these formats are easy to manipulate, transmit, and access. In determining how to output your data, it is important to consider how subsequent steps in the processing pipeline will impact which file type or use case is most appropriate.
&nbsp;

---

## Ethical and legal matters

The ethical and legal ramifications of webscraping are complex, but beyond all the obvious ethical dimensions to harvesting data from the internet, there are a few specific issues to be aware of (but obviously, we aren't lawyers and this isn't legal advice, so do your own research here): 

- Copyright applies to scraped data, which generally prohbitis the dissemination of webpages or large parts thereof (as opposed to *data* derived from those pages, which is factual and thereofore not usually protected by copyright)
- Personal data is protected (very broadly) by the GDPR in the EU, and, unviersally, by some basic ethical principles. Be sensible
- Website terms of service can prohibit web-scraping; the extent to which this is enforceable is not entirely clear to us non-lawyers but seems to vary with the specifics. Talk to a lawyer, or find other ways to the same data
- Actively circumventing measures taken to prevent access to data (e.g. passwords, account logins, etc) generally takes you out of the realm of publically accessible information, and typically isn't allowed


---

## Technical Process
The remainder of this post presents a more technical guide to the 3-step scraping process outlined above. All code snippets are in Python, and the working scraper code on which these snippets are based can be found [here][github]. It may be helpful to refer to the scraper's full code for more thorough inline commenting on what is described below.

#### Step 1: Download page HTMLs
To establish a connection with the relevant server, set up a TCP connector and start a client-server session with it. (The client refers to the entity requesting information from the server: your browser.)

```python
my_conn = aiohttp.TCPConnector(limit=20, ssl=False)
my_timeout = aiohttp.ClientTimeout(total=900)

async with aiohttp.ClientSession(connector=my_conn, timeout=my_timeout) as session:
    # do something
```

Using your client-server session, you should request to download the HTML of each URL you need to parse. For example, you may need to parse 
https://www.shmoop.com/study-guides/literature/index/?p=1, 
https://www.shmoop.com/study-guides/literature/index/?p=2,
https://www.shmoop.com/study-guides/literature/index/?p=3,
...and so on and so forth. In the code below, all needed URLs are passed in as the parameter `URLList`.

```python
async def downloadAll(URLList):
    my_conn = aiohttp.TCPConnector(limit=20, ssl=False)
    my_timeout = aiohttp.ClientTimeout(total=900)
    
    async with aiohttp.ClientSession(connector=my_conn, timeout=my_timeout) as session:
        # tasks = [ for each url in URLList: make HTML download request ]
```

If you need to make a large number of `GET` requests, your major bottleneck will be waiting for server responses, in which case it will greatly improve performance to asynchronously request HTML downloads from the server. This prevents requests that are going to and coming back from the server from interfering with each others' wait times.

 You should, however, balance this against a reasonable expectation for the server's load (are you making 50 requests or 5000? does this site see traffic in the 10s of requests per hour, or the tens-of-thousands?), and you should be aware that you might run into deliberate *rate-limiting* from the server, in which case you'll need to slow your requests down to avoid having your requests denied. 

To make asynchronous requests in Python, I use libraries [asyncio] and [aiohttp] and the according async-await syntax. 

In particular, I use asyncio's `ensure_future` method to asynchronously request the HTML pages of all needed URLs. Each download request is handled through a helper method `downloadLink()`. Once all requests have been made to the server, I return the results with asyncio's `gather`. If all has gone well, the return value will be a Python list of HTML page strings that are ready to be parsed.

```python
import asyncio
import aiohttp

async def downloadLink(session, url):
    async with session.get(url) as resp:
        html = await resp.text()
        return html

async def downloadAll(URLList):
    my_conn = aiohttp.TCPConnector(limit=20, ssl=False)
    my_timeout = aiohttp.ClientTimeout(total=900)

    async with aiohttp.ClientSession(connector=my_conn, timeout=my_timeout) as session:
        tasks = [asyncio.ensure_future(downloadLink(session, url)) for url in URLList]
        return await asyncio.gather(*tasks, return_exceptions=True)
```
&nbsp;

#### Step 2: Parse page HTMLs
A parsing library allows you to systematically search through a page's HTML [DOM tree][dom] for needed information. For example, suppose you want to create a list of all novel titles listed on https://www.shmoop.com/study-guides/literature/index/?p=1. 

To know what to parse for, inspect the DOM tree to identify a unique attribute of the element(s) you want to select. For the example above, try pulling up the page and opening your browser's Dev Tools (right click on the first novel title and hit 'Inspect'). Note that all novel titles are represented in the page's HTML DOM tree as divs with class 'item-info' (`<div class="item-info"> A Doll's House </div>`). Also note that no other elements on the page have this class.

Parsing now becomes a matter of constructing a query to select relevant elements of the DOM tree. (For our running example, the query should take advantage of the elements' unique class name.) Probably the most beginner-friendly parsing library to use is Python's Beautiful Soup or bs4 (documentation [here][bs4docs]). You can use bs4 by creating a BeautifulSoup object out of a downloaded HTML page — using SoupStrainer to narrow down which elements of the DOM tree to parse, if desired — and calling `.find` or `.find_all` on the BeautifulSoup object with your query.

```python
from bs4 import BeautifulSoup, SoupStrainer

def scrapeTitles(pageHTML):
    soup = BeautifulSoup(pageHTML, "lxml", parse_only=SoupStrainer(["div"]))
    titles = soup.find_all("div", class_="item-info").text.strip()
    
    # Store parsed information in variable fDataToWrite
    id = 0
    for title in titles:
        fDataToWrite.append([id++, title])
```

As you might notice, the second parameter in instancing a BeautifulSoup object is `lxml`, a library doing the actual parsing (documentation [here][lxmldocs]). In other words, the way we instance our BeautifulSoup object sets it up to parse using lxml under the hood. 

By adding other checks and capabilities, bs4 is more useful than lxml for parsing poorly structured or 'broken' HTML pages. But if you're scraping well-formed webpages and speed is a high priority — which it often is with scraping projects — it may be advantageous to parse with lxml directly.

```python
import lxml.html

def scrapeTitles(pageHTML):
    root = lxml.html.fromstring(pageHTML)
    titles = root.xpath("//div[@class='item-info']/text()")
    
    id = 0
    for title in titles:
        fDataToWrite.append([id++, title.strip()])
```

The crux of parsing with lxml is its `.xpath` method. It can be helpful to think of `.xpath` as another version of bs4's `.find_all`. For more information on structuring `.xpath` calls in your parsing code, try the relevant [documentation page][lxml.html]. Alternatively, lxml also supports parsing using [CSS selectors][lxmlcss].
&nbsp;

#### Step 3: Write parsed information to output file
After parsing all needed information and saving it in one or more variables, you should store your data permamently in some sort of output. The type of output you choose depends on how you intend to process and use the data after it has been scraped. My project's output files were .csv tables, for which Python uses the following syntax:

```python
import csv

# Before writing, open a CSV file with a header to write to
f = open("shmoop_novel_data.csv", "w")
fWriter = csv.writer(f)
fHeader = ["Novel ID", "Title"]
fWriter.writerow(fHeader)

# Throughout parsing, save relevant information to list variable (fDataToWrite)
# See previous code snippets
    
# Write out all rows of novel data to shmoop_novel_data.csv
fWriter.writerows(fDataToWrite)

# After writing, close CSV file
f.close()
```
---


## Optimizations: Tips, Tricks, and Libraries
### Servers and Connections
- Sending too many requests to download page HTMLs from a server may kick you off of a site for resembling bot behavior or a DDoS attack. A simple way I've managed this is by toggling the TCP connection's `limit` parameter to keep the number of simultaneous requests to a reasonable level (10-30 seemed to provide a good balance for my project).
   ```python
    my_conn = aiohttp.TCPConnector(limit=20, ssl=False)
    ```

- Realtedly, you'll find that some sites, like the New York Times, maintain a specific web API for programmatic access, which you should generally use to access their data, both as a courtesy to them, and because they'll often return data to you in a much more direct way that the html you'll get from more direct scraping)

- If your scraper needs more than the default 300 sec (5 min) to run, make sure to increase your TCP `ClientTimeout` to avoid a timeout error. Here it is 900 sec (15 mins):
    ```python
    my_timeout = aiohttp.ClientTimeout(total=900)
    ```
    
### Function
- Consider your scraper's file structure. I found it helpful to have separate files for main, config (global variables storing parsed information), download, scrape, and two output .csv's. 
    - In my main file, I imported the `time` library to track my scraper's basic speed performance. A good next addition would be using more thorough code [performance profilers][profilers].
    
- As mentioned above, some websites are easier to parse than others. It is useful to keep in mind that malformed DOM trees and otherwise 'broken' HTML structures may present a barrier to consistent parsing across subpages of the same URL domain. Higher-level libraries like bs4 will better accommodate the parsing of broken HTML or XML.

### Libraries
- I have not parsed in libraries other than bs4 and lxml, although there are many. I found this [article][scrapeops] helpful in comparing some potential alternatives.

- Character encoding detection is the process of figuring out how which schema a webpage uses to store characters as bits (e.g. ASCII, UNICODE, etc.). It sometimes delays parsing by adding overhead time to your code. To speed up character encoding detection, some suggest importing libraries like `cchardet` or `charset-normalizer` in your scraper code (documentation [here][cchardet] and [here][charset]). 
    - I did not find a meaningful difference in speed after importing these libraries, but this may have been due to not checking with a profiler. Here is one [article][hftguy] on speeding up bs4 performance that advocates for importing `cchardet`.
### Sites to Try
For sites where you can easily practice your scraping skills, this [article][proxyway] may be helpful.
&nbsp;






[Shmoop]: <https://www.shmoop.com/study-guides/literature>
[tripartite]: <https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/>
[get]: <https://www.w3schools.com/tags/ref_httpmethods.asp>
[w3requests]: <https://www.w3schools.com/python/module_requests.asp>
[json]: <https://www.programiz.com/javascript/json>
[csv]: <https://www.programiz.com/python-programming/csv>
[github]: <https://github.com/rileyseow/personhood-litguide-scraper>
[asyncio]: <https://us-pycon-2019-tutorial.readthedocs.io/asyncio_intro.html>
[aiohttp]: <https://us-pycon-2019-tutorial.readthedocs.io/aiohttp_intro.html>
[bs4docs]: <https://www.crummy.com/software/BeautifulSoup/bs4/doc/>
[dom]: <https://www.w3schools.com/whatis/whatis_htmldom.asp>
[lxmldocs]: <https://lxml.de/>
[lxml.html]: <https://lxml.de/lxmlhtml.html>
[lxmlcss]: <https://lxml.de/cssselect.html>
[proxyway]: <https://proxyway.com/guides/best-websites-to-practice-your-web-scraping-skills>
[toscrape]: <https://toscrape.com/>
[scrapethissite]: <https://www.scrapethissite.com/>
[profilers]: <https://www.jetbrains.com/help/pycharm/profiler.html>
[scrapeops]: <https://scrapeops.io/python-web-scraping-playbook/best-python-html-parsing-libraries/>
[charset]: <https://pypi.org/project/charset-normalizer/>
[cchardet]: <https://pypi.org/project/cchardet/>
[hftguy]: <https://thehftguy.com/2020/07/28/making-beautifulsoup-parsing-10-times-faster/>
[dos]: <https://en.wikipedia.org/wiki/Denial-of-service_attack>
[beloved]:<https://en.wikipedia.org/wiki/Beloved_(novel)>