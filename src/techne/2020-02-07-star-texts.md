---
permalink: '/star-texts/'
title: "Star Texts: A Case Study in Harper’s and Vogue"
authors: [clindemann]
projects:
date: 2020-02-07
teaser: |
  Richard Dyer's 1979 *Stars* introduces the concept of a star image or star text as the aggregate of every public appearance of, or reference to a given Hollywood studio actor.
---

In an early scene from Quentin Tarantino's *Once Upon a Time in Hollywood*, a casting agent warns the former star of a hit TV western against the kind of cameo roles he's been taking since his show was canceled. Short a more permanent gig, the aging actor has been making guest appearances as one-episode villains on a number of newer action slots. The casting agent's advice is something to this effect: you might think these roles are a good part-time gig, but every time the audience sees you beat at the end of the episode, they see TV's up-and-coming action star besting the reigning champ. They're using your decline to prop up some new guy's rise to success. The real drama here is not between any particular episode's hero and its villain, but between two dueling star texts.

Richard Dyer's 1979 *Stars *introduces the concept of a star image or star text as the aggregate of every public appearance of, or reference to a given Hollywood studio actor. In Dyer's terms, the star image is produced by the studio as a collection of mass cultural objects across a wide range of media. These would include the actor's film and television roles, but also interviews, radio appearances, commercials, as well as published gossip, tabloids, and reviews. Part of what is most enabling about Dyer's formulation is that it allows us to separate the celebrity as a real person from the public discourse around them. "Star text" is a term that helps us think about "stars" as "texts"---and not just texts, but narratives.

The Literary Lab's *Star Texts* project departs from more traditional work on celebrity in both methodology and scale. Our project uses computational methods to trace large historical trends across a corpus of star texts, pursuing lines of questioning like: do star texts have genres? and, do they follow narrative conventions? Working through these larger conceptual questions, I wanted to test if we could already see these kinds of patterns emerging in a sample corpus. Stanford has access to the entire archive of *Harper's Bazaar *and *Vogue Magazine*,[[1]](/star-texts/#_ftn1) let's start there.

I hand-curated a database of Hollywood stars, combining a comprehensive list of actors nominated for Academy Awards with a number of fan-made lists of highest grossing stars of all time and cult favorites. I then ran the complete list through the corpus, pulling out every item that mentioned one of these names. Instead of counting every time a star's name appears in a given article, advertisement, or review, as soon as the name hit, I grabbed the whole object. This means that all items in each star text are equally weighted. For example, a 1954 cover story on Judy Garland counts as one "hit," as does a brief mention in a 1993 feature about Anne Hathaway.[[2]](/star-texts/#_ftn2) I think this choice is in line with Dyer's concept: the actor might be dead but the Judy Garland star text continues to be shaped and reshaped. (Think of Renée Zellweger in this year's Judy Garland biopic.) An off-hand remark like, she's "a bit like Anne Hathaway," is also a chapter in that narrative.

Figure 1 offers a rough image of the corpus of star texts I compiled from the *Harper's *and *Vogue *archive. Each colored layer represents a star text. Figure 2 includes only the ten largest so we can actually see who's who. (Note the size of the Meryl Streep star text, we'll return to this later.)


**Figure 1**

<a href="/assets/images/techne/all-star-texts.png"><img src="/assets/images/techne/all-star-texts.png" width="800px" /></a>

**Figure 2**

<a href="/assets/images/techne/top10-star-texts.png"><img src="/assets/images/techne/top10-star-texts.png" width="800px" /></a>

Even though there's far more material in the contemporary side of the corpus, our top ten stars are spread fairly evenly across a century of Hollywood history. We have four from the studio-system dominated era of Classical Hollywood: Katharine Hepburn, Bette Davis, Audrey Hepburn, and Elizabeth Taylor. Three from the post-studio system, the New Hollywood era: Jane Fonda, Jack Nicholson, and Meryl Streep. And three from the contemporary: Cate Blanchett, Julia Roberts, and Nicole Kidman. With living actors, periodization is tricky. For example, do we still think of Meryl Streep as "New Hollywood" when the majority of her filmography is more recent? To make things clearer (if a bit cruder) I split the corpus into two periods: "classical Hollywood" and a "post-classical" era.[[3]](/star-texts/#_ftn3)

If Figure 1 helps us compare the size and extent of the star texts in our corpus, it does little to help us read individual star texts as narratives. Figures 3 & 5 represent the composition of each star text as a product of reviews and advertisements.[[4]](/star-texts/#_ftn4) Reviews and advertisements seem a useful proxy for the two faces of Hollywood stardom: the actor and the consumer icon. By comparing them, we begin to see stories of how stars move though different spheres of celebrity.

**Figure 3**

<a href="/assets/images/techne/top10-star-texts-each.png"><img src="/assets/images/techne/top10-star-texts-each.png" width="800px" /></a>

Each graph in Figure 3 shows the number of advertisements and reviews per year that feature a given star in the classical Hollywood period. Each of the top ten biggest star texts of this era begin with a series of advertisements that significantly precede the star's first mention in a review. For example, at the beginning of her career, Bette Davis exclusively appears in advertisements.[[5]](/star-texts/#_ftn5) In 1934 she appears in an ad for a "hair conditioning oil treatment;" in 1936 she's selling silk stockings; in 1939, it's costume jewelry. These ads all have an aspirational quality. These are relatively mundane objects sold under the auspices of Hollywood glamour. But the sales pitch cuts both ways. Each image is also explicitly tagged with the studio brand. For example, directly under the slogan "This glamour can be yours!" in the costume jewelry ad, there's another caption. This one reads: "Bette Davis as she appears in a scene from the epochal drama, *Juartez*, produced in regal splendor by Warner Bros."

**Figure 4 **[[6]](/star-texts/#_ftn6)

<a href="/assets/images/techne/star-texts-ad.png"><img src="/assets/images/techne/star-texts-ad.png" width="800px" /></a>

The image of Bette Davis in costume doubles as Warner Bros. promotional material. She sits gracefully at the intersection of the Hollywood studio and the consumer brand, presiding over the complex network of advertisement messaging. From this perspective, her "regal splendor" seems especially stagy. The star image is a prop, produced at this intersection to grease the wheels of brand integration.

After this image has been sufficiently sedimented in almost a decade of advertisements, reviews begin to trickle into the star text. First items like "Movies of the Month" in 1941, then "The Oscar Jinx" in 1986. If there's a generalizable pattern for star texts of the classical period, it's this movement from "star" to "actor." First, *"Bette Davis, consumer icon, in all her Regal Warner Bros. Splendor,"*and only then *"Bette Davis, Oscar winner."*

**Figure 5**

<a href="/assets/images/techne/star-texts-10-post-classical.png"><img src="/assets/images/techne/star-texts-10-post-classical.png" width="800px" /></a>

In the post-classical period, we see the opposite. In Figure 5, each star text graph starts with a stretch of reviews. Ads appear significantly later. Here, "stars" have to start as indie "actors," before they go on to make real money in blockbusters and ad campaigns. For example, the Kate Winslet star text begins with a stretch of reviews for Indie movies and prestige period pieces, like Kenneth Branagh's 1996 adaptation of *Hamlet *and Jane Campion's 1999 *Holy Smoke!*

For many of these star texts, reviews are already on the decline when ads begin. If in the classical Hollywood period, "advertising icon" and "film star" go hand in hand, in the post-classical period, consumer discourse seems inimical to the star's image as an actor. Once ads constitute a significant portion of the star text, reviews dwindle.

I think this suggests that star production in the studio system is replaced by something like a prestige economy. Under the studio system, star texts were tightly monopolized by the studio. Even as the studio system declined in the mid-century, many stars continued to sign long-term production deals.[[7]](/star-texts/#_ftn7) After the studio system, stars became free agents, but without their corporate backing, star texts seem more vulnerable to brand contamination. As Figure 5 suggests, the most successful star texts of the era carefully separate the actor from the brand ambassador, the artist from the market player.

**Figure 6 **[[8]](/star-texts/#_ftn8)

<a href="/assets/images/techne/star-texts-kate.jpg"><img src="/assets/images/techne/star-texts-kate.jpg" width="800px" /></a>

In 2003, *Harper's* ran a piece titled, "Kate's Turn," as in *Kate's turn in the limelight, *or *Kate's turn at big time Hollywood fame*. Ironically, this data point appears in the Kate Winslet star text just as her early-career uptick in reviews starts to decline. It's a turning point in more than one sense: *Kate's turn *from a review-based star text to an ad-based one; from an indie actor to the face of an anti-aging cosmetics line.

Maybe this gives us a clearer picture of why Meryl Streep is the most frequently mentioned star in all of *Harper's *and *Vogue *combined. Meryl Streep doesn't appear in a single ad. Her prestige as an actor is uncontaminated. Or maybe we're only looking at the first chapter and *Meryl's turn* is next.

#### Notes

<a name="#_ftn1"><sup>1</sup></a>  Both magazines began in the late 19thcentury, but for our purposes here, we're mostly looking at 1920 through 2017. Hollywood films didn't regularly credit actors until the mid 1910s and 2017 is as contemporary as the corpus gets.

<a name="#_ftn2"><sup>2</sup></a> *Vogue *writer, Adam Green, quotes Lone Scherfig, Hathaway's director for film *One Day*, "She has some of the quality of Elizabeth Taylor or Judy Garland or someone who is not iconic because of her beauty of her goddess status but because of her warmth and depth and humanity. She's not a Hitchcock blonde---she's a real person." Green, Adam. "Happily Ever After." *Vogue*, 1 Nov. 2010, pp. 196-205.

<a name="#_ftn3"><sup>3</sup></a> I separated these out mostly by hand with star texts that begin before the 1960s as "classical Hollywood," and star texts that begin after the 1960s as "post-classical." The star texts that begin in the 1960s, I determined on a case-by-case basis.

<a name="#_ftn4"><sup>4</sup></a> I've excluded the star texts of male celebrities from Figures 2 & 3. Male actors rarely appear in the ad campaigns targeting women readers in *Harper's *and *Vogue*.

<a name="#_ftn5"><sup>5</sup></a> Bette Davis was the first star to break from the studio by turning herself into a company, B.D. Inc. in 1942. Her first review in our corpus is a 1941 mention in *Harper's Bazaar* for her role in "The Man Who Came to Dinner."

<a name="#_ftn6"><sup>6</sup></a> "Advertisement: Hollywood Jewelry Products, Inc. (Hollywood Jewelry Products, Inc.)."* Vogue*, vol. 93, no. 9, May 01, 1939, pp. 137*. ProQuest*, https://search.proquest.com/docview/897868378?accountid=14026.

<a name="#_ftn7"><sup>7</sup></a> "[Through the 1960s and 70s,] Para­mount had Jerry Lewis, Universal had Rock Hudson and Doris Day, MGM had Elvis Presley." Thompson, Krisitin, and David Bordwell. *Film History: An Introduction*. McGraw, 2003. 512.

<a name="#_ftn8"><sup>8</sup></a> "Kate's Turn: Kate Winslet reveals how she balances premiers, motherhood, and her romance with director Sam Mendes." Harper's Bazaar, no. 3494, 01, 2003, pp. 60-63. ProQuest, https://search.proquest.com/docview/1881113406?accountid=14026.