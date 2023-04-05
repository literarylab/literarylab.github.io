---
key: 'novel-worldbuilding'
permalink: /projects/novel-worldbuilding/
title: "Novel Worldbuilding"
image: '/assets/images/projects/novel-worldbuilding.jpg'
members: [nnomura, malgeehewitt]
status: 'active'
type: 'member'
date_updated: 2023-01-01
start_date: 2019-01-15
end_date:
shortdesc: |
    Exploring narrative techniques that allow authors of Science Fiction (SF) to create and communicate invented worlds
---

This project explores two narrative techniques that allow authors of Science Fiction (SF) to create and communicate invented worlds.

## Explicit Worldbuilding: Microgeneric worldbuilding
Explicit worldbuilding--moments that appear to merely convey worldbuilding information--is simultaneously widely acknowledged as a unifying feature of the genre yet derided as “witless, even infantile.” Questions of when and how much explicit worldbuilding happens, then, might help us answer questions about prestige and more fundamental questions about the form of SF.

After initial feature-finding forays into explicit worldbuilding, we turned to the Lit Lab’s Microgenres project, hoping to replicate their work on a specifically SF corpus. The Microgenres project seeks to identify extra-disciplinary discourses within narrative using a non-lexical approach. We hypothesized that moments of explicit worldbuilding might resemble these disciplinary discourses.

### Corpus
To test this hypothesis, we assembled a test corpus of 17 SF novels and 26 science texts written by Isaac Asimov, sampled to comparable size.

### Methods
With the Microgenres feature set (including frequency of Penn Treebank POS tags, average sentence length, average number of clauses per sentence, and numbers of named entity persons), we created a classification model using linear discriminant analysis. By training a model on 20- and 50-sentence subsections of our corpus of science writing and then classifying similarly-sized passages of SF, we can use the posterior probabilities of the classification results to identify the mixture of science writing in each part of each SF novel.

### Analysis
This section of the project seeks to answer two related questions. First, are there significant stylistic differences in Asimov’s science and science fiction? And, second, if those stylistic differences exist, can we identify moments where science style appears in SF?  To answer the first question: yes. Our classification model had a success rate of 95% at the 50-sentence level and 91% at the 20-sentence level.

## (Im)probabilities and Worldbuilding
In implicit worldbuilding, authors juxtapose tokens that are familiar to readers within contexts in which their co-occurrence is unexpected, such as“the door dilated.” While both “door” and “dilated” are familiar to readers, their unexpected co-occurrence signals a new world.

### Corpus
To explore the role of syntagmatic pairs in implicit worldbuilding we expanded our corpus to include 246 SF novels published between 1905 and 2017, which we compared to a combined corpus of 146 novels from the same period tagged as “realism” and a corpus of 311,580 journal articles from Scientific American and the Journal of the British Medical Association (JBMA).

### Methods
We tested normalized pointwise mutual information (NPMI) as a means to identify such bigrams as above, but the sensitivity of PMI to low frequency words (rather than low frequency word pairings) made it unable to detect bigrams of the kind we sought. Our interest, in this particular project, is in improbable or novel combinations of otherwise normal frequency words--and the signal of those improbably-combined words are drowned out by the noise created by pairings of low-frequency words.

In order to identify implicit worldbuilding, we introduce a new metric, improbability, as a way of measuring the significance of word pairs whose constituent elements occur in reference corpora, but whose combination is relatively unique to our target corpus.

Subtraction of the probability of words x and y following each other in our reference corpus from our target corpus gave too much significance to instances in which rare tokens in the non-SF corpus skewed the probability of their co-occurrence. Accordingly, we scaled the resulting metric using the zeta measure of significance for the terms.

## Conclusions

The two methods we employ, microgenres and improbility, have proven successful at identifying key moments of worldbuilding in SF. More importantly, the two metrics correspond to explicit and implicit worldbuilding, creating the opportunity to study not just individual examples of how these two strategies are employed by authors at the level of the text, but also patterns that differentiate SF from other literary genres.
