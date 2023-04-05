---
key: 'microgenres'
permalink: /projects/microgenres/
title: "Microgenres"
image: /assets/images/projects/microgenres.jpg
members: [malgeehe, mbronstein, adroge, efredner, rheuser, amanshel, nnomura, jporter, hwalser]
collaborators:
status: 'archive'
type: 'lab'
date_updated: 2023-01-01
start_date: 2017-09-01
end_date: 2023-01-01
shortdesc: |
  Computationally modeling stylistic changes within the novel that mimic other disciplinary discourses
---

From Bakhtin’s heteroglossia to Genette’s transtextuality, theories of the novel describe its form as a mixture of diverse elements or styles. While many of these mixtures are contiguous with the text as a whole (a novel, for example, can operate in both the genres of history and the gothic), in this project, we are interested in overt stylistic changes *within* the text of a novel that mimic the discourse of non-novel genres like psychology, philosophy, or natural science—what we call here shifts in *microgenre*.

While the phenomenon that we describe above is present throughout the history of the novel, and in many different novelistic traditions, we restrict our inquiry in this paper to the period between 1880 and 1914. Not only does this enable our investigation to control for the historical change in both disciplinary discourse and fiction, but the late nineteenth century is also a critical period in the history of modern disciplinarity. We assembled a corpus of 97 texts written between 1880 and 1914. This corpus included 10 texts each from a range of disciplines, including Anthropology, Economics, Philosophy, Psychology, History, Politics, and Natural Science. These texts were chosen by the project participants to be representative of the range of possible discursive styles of each discipline and to be of a length similar to the novels of the period. The corpus also includes 27 novels (again written between 1880 and 1914), which both served as an example of the narrative discursive style for our model, and also allowed for further classification of the various disciplinary styles as they are embedded in these texts.

Our approach builds on the work of stylometry, but departs in two important ways. First, because we are interested in shifts in *discourse* rather than *content*, we have opted to take a non-lexical approach. Rather than a feature set built from a subset of token frequencies (like most frequent words), we use grammatical features in our model, including the frequency of the Penn Treebank POS tags, the average sentence length, and the average number of clauses per sentence. In a lexical approach, a model built on the most frequent words—as in the calculation of delta—is too tied to authorial signals, while a model built on distinctive words would be too indicative to the subject matter, rather than the style, of the individual disciplines. Secondly rather than a cluster-based distance approach, we adopt a classification model that builds upon research into literary genres using computational methods. By training a model on 100-sentence subsections of our corpus of disciplinary texts and then classifying similarly sized passages of contemporaneous novels, we can use the posterior probabilities of the classification results to identify the mixture of disciplinary writing in each part of each novel.

The project seeks to answer three related questions. First, are there differences in the discourse of disciplines that are discernable through differences in style rather than simply vocabulary? Second, if differences in style can be identified among disciplines, is it possible to detect evidence of these styles embedded within novelistic prose?

To answer the first question, we created a classification model using discriminant function analysis. Our choice of a method spoke to both our hypothesis that the classification of disciplinary style would be found in a linear combination of grammatical features, as well as our subsequent use of the posterior probabilities calculated by the model (rather than hard classifications) as proxies for the disciplinary mixtures in each of the passages that we classified. The results of our initial classification (cross-validated through a withheld test sample) reveal that our model was able to classify the texts from each discipline at a far greater percentage than chance; even the least-successful discipline, economics, was accurate more than 50% of the time (chance guesses would have been right 9% of the time). The misclassifications in each genre speak both the complexities of the model, but also to the same microgeneric phenomena that occur in novels. In a book on natural science, for example, the straightforward discourse of history includes aspects of natural science in its attention to the details of historical events.

![Microgenres success rate for each genre](/assets/images/projects/microgenres-successrate.jpg)
