---
permalink: '/techne/new-litlab-website/'
title: "A New LitLab Website"
authors: [mwarner, qdombrowski]
projects:
date: 2023-04-05
teaser: "We're pleased to introduce the new website for the Stanford Literary Lab; it's the first overhaul of the site since 2015, and the first time the site has moved off of WordPress."
---

We're pleased to introduce the new website for the Stanford Literary Lab; it's the first overhaul of the site since 2015, and the first time the site has moved off of WordPress.

When the Lab first built its website (first captured by the Internet Archive in [February 2011](https://web.archive.org/web/20110206155231/http://litlab.stanford.edu/)), WordPress was the obvious choice for a simple, no-fuss informational website, and it  served the Lab well as low-maintenance infrastructure for a decade.

As we updated the site to a recent version of WordPress, we realized how much the platform has changed. For a modern-looking theme with a reasonable amount of flexibility, prepare to pay -- and not once, but as an annual single-site subscription, typically requiring an annual subscription to one or more premium plugins. These plugins and themes override each other in surprising and one-off ways, leading to a site that is frustrating to build, challenging to document for future site maintainers, and depends on ongoing payments to keep working. We needed something else, which for us meant HTML.

There are currently two common routes that lead towards static websites: principles and praxis. The former adopts minimal computing practices as an ideology, seriously considering issues of ecological impact and global infrastructural limiatations. The latter is often borne out of acknowledging the unending labor that must go into maintaining the technical underpinnings of a site, in order to avoid either the consequences of being hacked, or the site falling apart as dependencies further down in the stack are upgraded beyond the site's ability to bear that change (neither was quite our situation, but the security warnings were piling up and getting harder to banish).

For us, the shift to a static site (using the [Node-based Eleventy framework](https://www.11ty.dev/)) was more motivated by the latter path more than the former, though the "[questions of minimal computing](http://www.digitalhumanities.org/dhq/vol/16/2/000646/000646.html)" posited by Roopika Risam and Alex Gil also inform our thinking with this new site:

> 1) “what do we need?”; 2) “what do we have”; 3) “what must we prioritize?”; and 4) “what are we willing to give up?”

## What do we need?

We've argued about this quite extensively, but some things are less negotiable: the Lab has an ISSN for its Pamphlets series, which resolves to a webpage according to an international metadata record. At a minimum, we need a website for that. Beyond that, how valuable is a list of current and former members—and, as a pretty open research collective, who's a member, and who *was* a member in 2014? How useful is a list of our current projects? What about the past projects? Should we maintain a page for each project, in perpetuity, for current and former members to point to as part of their CVs? And then there's the question of anything blog-like, be it the "[Techne](/techne)" posts or something that looks more like "[News](/news)", covering things like Lab presentations, conference talks, and grant awards. Some of these questions are newer, but some are eternal; looking back to the first version of the website, it had [its own News section](https://web.archive.org/web/20110630171551/http://litlab.stanford.edu/?page_id=107) with several posts in 2011... all of which [vanish by 2012](https://web.archive.org/web/20120113180402/https://litlab.stanford.edu/).

This new version of the site pushes the Lab the farthest it's ever gone in the direction of publicly recording its work, and we'll see whether or not that sticks: will we still be creating project pages in two years? And what about the more quotidian churn of news and events? We've gone back through our mailing list to find old project presentations from the last few years to backfill a new generation of "News" with those announcements so visitors can see what we've been up to in the recent-ish past, but will we be able to find the time to keep this all up-to-date? It should go without saying, but the lab does not have a (full- or part-) time webmaster, or even anyone whose day-to-day responsibilities clearly include keeping the site up to date. 

## What do we have?

What we have is fundamentally shaped by the wordpress website framework we have been operating in: we've got pamphlets, a static, single projects page with (varying degrees of outdated information about what once were) current projects, and Techne as a kind of blog with 16 posts over 7 years. 

What we have is less interesting than what we are willing to make. And to that end, over the course of rebuilding this website we have created close to 50 news posts that capture the Lab's work, quarter-by-quarter, through its presentations. We have created [archived project](/projects/archive/) pages to connect with each pamphlet, along with several projects from the last five years that came to a close without producing a pamphlet, but reflect a considerable amount of thought and work nonetheless. We have also grappled with the always-challenging question of "what are our [current projects](/projects)", and made pages for those as well.

## What must we prioritize?

Fundamentally, our most important goal was simply a refreshed site that looked and felt like the product of DH research collective active in the 2020s. Along the way, though, we've built a data model that we're hoping will make it easier to document our work here in the Lab, especially when that work hasn't ended up in a published pamphlet (or journal article). We'd like a clearer record of our past, and we're hopeful that this will benefit lab members for whom it might be useful to have a pointer to their work on Lab projects, including those on the job market. We've also overhauled the [People](/people) page to give core Lab researchers more visible space to describe their work and academic interests.

The desire to minimize technical site maintenance was a significant factor in our choices as well: reducing the technical infrastructure of the site means that there are fewer things that could fundamentally bring down the site, and it means that the site's basic content can be more easily contributed to by more members of the lab.

## What are we willing to give up?

For people accustomed to working with WordPress's WYSIWYG interface, shifting to working directly with Markdown files can be a bit of a shock. That said, that has never been the Lab's workflow: there's always been one or two people people —- not a designated webmaster so much as an over-stretched graduate student or director -- who've handled the vast majority of website changes, struggling with the way WordPress handles authorship (which meant that anyone who contributed to the site's ocntent needed dummy accounts for attribution). 

Under the new system, we've set up a series of templates to process the site content, and [written documentation](https://github.com/literarylab/literarylab.github.io#readme) for how to update or add new instances of all the types of content on the site. For most Lab members, we expect their experience with the website will involve filling in text-file templates for different kinds of content using Markdown and/or YAML, and either emailing them to the webmaster or -- for the bold -- proposing them as a pull request on GitHub, where the site is published. Writing in Markdown and/or YAML may not be the most comfortable for Lab members, but those skills are useful in the context of other tools, too. Even publishing on GitHub means a set of trade-offs: it takes us outside the sphere of Stanford IT support requests, but also leaves us less vulnerable to the web platform shifts that have characterized the last several years at Stanford.

## The future of the Lab site

If you're curious about what we're doing technically with the LitLab site, check out our [github repo](https://github.com/literarylab/literarylab.github.io). We've come up with some interesting workarounds for things like bibliographic formatting, by using a [plugin that formats citations from bibtex](https://github.com/Savjee/eleventy-plugin-bibtex), and automatically generating the bibtex from (arguably) friendlier-to-author YAML frontmatter. 

That said, in the end, the biggest challenges for website maintenance are social, rather than technical. Only time will tell how it all will turn out.