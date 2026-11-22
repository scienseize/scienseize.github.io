---
title: Semiotic Validity
order: 3
kind: Research paper · Information retrieval
year: '2025'
blurb: Does a vector search keep the meaning, or only the match?
images: [/projects/semiotic-validity-sdi.svg]
tools: [FAISS, Pinecone, Sentence-BERT, BioBERT, OpenAI embeddings]
role: Co-author, with Jude Joseph Garcia Jr and Blaise Howard Bustamante
status: Student Best Paper Presentation Award, I-RISE Conference 2025
award: Best paper presentation
summary: >-
  Similarity scores show whether a vector search finds a match, not whether it keeps the meaning. The paper defines semiotic validity and a Semantic Depth Index that scores it on four dimensions: geometric coherence, hierarchical structure, relational logic and interpretive alignment. It sets out a mixed-methods design to compare seven embedding models on FAISS and Pinecone.
abstract: >-
  Current vector-based retrieval systems in FAISS, Pinecone, and RAG frameworks rely on metrics (precision, recall, cosine similarity) that measure surface-level matching without assessing whether systems preserve the hierarchical, relational, and contextual structures that constitute genuine semantic understanding. Existing evaluation methods fail to quantify whether embeddings maintain conceptual depth or merely reproduce statistical co-occurrence patterns. This paper presents semiotic validity as a measurable construct, operationalized through the Semantic Depth Index (SDI), integrating four dimensions: geometric coherence (cluster quality), hierarchical structure (taxonomic preservation), relational logic (analogy completion), and interpretive alignment (human judgment correlation). This paper provides a comprehensive mixed-methods design for evaluating seven embedding models, including OpenAI, Sentence-BERT, and BioBERT variants. The study spans dimensions from 384D to 3072D across abstract, technical, and concrete domains, utilizing 500 human-annotated concept pairs validated against established benchmark datasets (SimLex-999, WordSim-353, MEN). The proposed methodology integrates quantitative SDI scoring with qualitative failure mode coding of the lowest-scoring 50 concept pairs to identify systematic patterns of semantic collapse. The framework is designed to compare performance across FAISS (flat/HNSW indices) and Pinecone deployments, testing whether dimensionality, indexing algorithms, and RAG architectures affect conceptual depth preservation. The primary contribution of this work is this framework itself: the first systematic method for diagnosing interpretive fidelity, enabling developers to optimize for semantic coherence rather than similarity alone.
---
