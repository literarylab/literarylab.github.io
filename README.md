# LitLab.stanford.edu guide

## Running the site locally

Make sure you have downloaded and installed [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Clone or download the repo to your own computer. (If you want to add new content to the site, you should probably clone the repo so you can use a pull request to move the new files over to the site.)

Change into the directory with the repo and run `npm install` to install all the Node.js dependencies. Then run `npm run build`. Finally, run `npx @11ty/eleventy --serve` then go to _http://localhost:8080_ in your browser to see the site.

## How the site works

In the big picture, all the site content -- project descriptions, Techne posts, pamphlets, information about Lab members -- exists as a series of text files, mostly using [markdown](https://www.markdownguide.org/basic-syntax/) syntax, which get processed through a set of templates to create the website. To update the site contents, you create new markdown files or update existing ones in the _src_ directory; you can also add images or other files and reference them in your Markdown files.

The one exception is the information about Lab members, which is managed in a JSON file at _src/data/LabPeople.json_.

We'll go through the site one content type at a time.

## Content

### Techne

Techne posts live in _src/techne_. Their filenames should follow the following convention: `yyyy-mm-dd-post-title-separated-by-hyphens.md`. At the top of each Techne post markdown file, there's _frontmatter_ -- basically, metadata. The frontmatter section begins and ends with three hyphens, and you should fill in the values for each of the fields. Here's an example:

    ---
    permalink: '/techne/example-post/'
    title: "Techne's Example Post"
    authors: [efredner, malgeehewitt]
    projects: [typicality]
    date: 2020-07-18
    teaser: |
      A sentence or two goes here, and you don't have to worry about single or double quotes.
    ---

Text that isn't part of a list should be surrounded by either single or double quotes; if the text includes an apostrophe (like in the example title here), use double quotes, and vice-versa.

Lists should be in square brackets, and you don't have to put quotes around list items. The two lists associated with Techne posts are _authors_ and _projects_. To reference a Lab member or collaborator, use the first letter of their first name and their full last name, all lower-case. (If you're not sure look at the _src/data/LabPeople.json_ file, which is ordered alphabetically by last name.)

To reference one or more projects, use the project key (unique identifier). The key is the final part of the project URL, and is also the name of the project's markdown file in the _src/projects_ directory.

### Presentations

Presentation posts are like Techne, but simplified. Presentation posts should follow the same naming convention: `yyyy-mm-dd-post-title.md`.

Here's the frontmatter for a presentation post:

    ---
    title: "LitLab at MLA 2023"
    projects: [typicality, star-wars]
    date: 2023-01-01
    teaser: |
      The LitLab is doing stuff at MLA 2023.
    ---

In the body of the presentation post, you can put the full description of Lab talks.

### Projects

All projects live in _src/projects_. Projects that should no longer be on the Lab's list of current projects are assigned `status: archive`, which will put them on an archive page.

Project pages can have extensive prose in the content area below the frontmatter, or just a little metadata in the frontmatter. At a minimum, each project should have a title, a key, information about the project team, and one square image (400px x 400px square, to be put in _src/assets/images_).

Here's an example of frontmatter for an archived project:

    ---
    key: 'example-with-pamphlet'
    permalink: /projects/example-with-pamphlet/
    title: "Example Project with a Pamphlet"
    image: '/assets/images/example-with-pamphlet.jpg'
    members: [malgeehe, adroge, efredner, rheuser, amanshel, nnomura]
    collaborators: [jporter, hwalser]
    date_updated: 2023-01-01
    start_date: 2018-09-01
    end_date: 2023-01-01
    status: 'archive'
    shortdesc: "Example with pamphlet short description here."
    longdesc: "Example with pamphlet long description here. Note how it is longer than the short description."
    ---

### Publications

Publications live in _src/publications_. All publications are listed on the LitLab bibliography, and if they're associated with a specific project, the title and a link for the publication also appear on the project page. Most publications get a filename of \[firstauthor\]\[year\].md.

When there is a new publication, ask the person who wrote it to send you the following information, as exemplified below:

    ---
    type: 'article'
    pubkey: 'algeehewitt2020'
    author: 'Algee-Hewitt, Mark and Porter, J.D. and Walser, Hannah'
    title: 'Representing Race and Ethnicity in American Fiction, 1789-1920'
    journal: 'Cultural Analytics'
    volume: '5'
    number: '2'
    url: 'https://culturalanalytics.org/article/18509'
    year: 2020
    group: 'article'
    project: 'representing-race'
    ---

You can leave off the `project` if it isn't associated with a particular project. Be sure to format the author names exactly like this so the bibliography plugin can handle them correctly.

Pamphlets get a filename of \[llp\]\[pamphlet-number\].md. Pamphlet PDFs should go in _src/assets/pdf_. The pamphlet template is a little different:

    ---
    type: 'article'
    pubkey: 'LLP17'
    author: 'J.D. Porter'
    title: 'Popularity/Prestige'
    journal: 'Stanford Literary Lab Pamphlets'
    volume: '17'
    url: 'https://litlab.stanford.edu/LiteraryLabPamphlet17.pdf'
    year: 2018
    project: 'popularity-prestige'
    group: 'pamphlet'
    pamphlet:
      image: "/assets/images/pamphlets/p17.png"
      pdf: "LiteraryLabPamphlet17.pdf"
      pubdate: 2018-09-01
      blurb: "If canonicity means escaping obscurity, we need a model of the canon that can accommodate multiple methods of being remembered."
    ---

### People

All the information about Lab members and collaborators is in a JSON file: _src/data/LabPeople.json_. The entries are arranged in alphabetical order by last name. Every person has a unique key: the first letter of their first name, and then their full last name, all lower-case, single-word, no punctuation. So, the key for Mark Algee-Hewitt is `malgeehewitt`.

Members of the Core Research Team and other people with specific titles (i.e. "Director" variants) have a title field and a "bio" field. Active Stanford-based members have the value "stanford" in their status field; active members outside of Stanford have the value "elsewhere" in their status field, and also have a "university" field with their current location (if relevant). Current members at Stanford or elsewhere have an "email" field and an optional "website" field.

If you want to reference a person for the first time (e.g. as part of a project team or as an author of a Techne post), you have to add them to the LabPeople.json file and then reference their key in the post or project.

## Layout

### Pages in the navigation menu

Other than the index page, which appears directly within the _src_ folder, the main pages of the site live in _src/pages_. Pages appear in the navigation menu because of something added to the frontmatter. For instance, this is the frontmatter for the About page:

    ---
    permalink: /about/
    title: 'About'
    layout: base
    eleventyNavigation:
      key: About
      order: 1
    ---

The permalink indicates its path. The layout for all the main pages is 'base' (i.e. just the plain page layout). The _eleventyNavigation_ section is what indicates that the page belongs in the menu, and in what order it will appear.

With the exception of the About page, each of the navigation menu pages includes some combination of text and code to pull in data from somewhere else (e.g. a list of Techne posts and teasers, a grid of Projects, etc.) These layouts use [Nunjucks](https://mozilla.github.io/nunjucks/templating.html#tags) (.njk) which is fairly similar to Liquid (the language used for templates in Jekyll).

### Projects

The templating / layout for all the project pages is controlled by _src/layouts/project.njk_ (**not to be confused** with _src/pages/projects.njk_, which contains the framing text and the layout for the Projects page in the navigation menu.) Edit that file to update the layout for all projects.

### Posts

The templating / layout for both Techne and Presentations is handled by _src/layouts/post.njk_.
