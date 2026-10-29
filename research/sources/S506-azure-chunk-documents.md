---
id: S506
url: https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents
title: Chunk large documents for agent and RAG solutions
publisher: Microsoft Learn (Azure AI Search)
grade: A
page_date: 2026-07-02
opened: 2026-10-25 (extra passages 2026-10-29 P7-P12)
status: used
---
Summary: Microsoft documentation of chunking for Azure AI Search. Graded for what Azure recommends only, not what any web search engine does.
## Passages
### P1 why
> Partitioning large documents into smaller chunks can help you stay under the maximum token input limits of chat completion and embedding models.
### P2 truncation
> Partitioning your content into chunks helps you meet input token requirements and prevents data loss due to truncation.
### P3 single vector
> Chunking is only required if the source documents are too large for the maximum input size imposed by models, but it's also beneficial if content is poorly represented as a single vector.
### P4 embedding limit
> For example, the maximum length of input text for the Azure OpenAI text-embedding-3-small model is 8,191 tokens.
### P5 start size
> We recommend starting with a chunk size of 512 tokens (approximately 2,000 characters) and an initial overlap of 25%, which equals 128 tokens.
### P6 headings
> Embedded markup, like HTML or Markdown, have heading syntax that can be used to chunk data by sections.

### P7 overlap continuity
> overlapping a small amount of text between chunks can help maintain continuity and context

### P8 overlap transitions
> This overlap ensures smoother transitions between chunks without excessive duplication.

### P9 sentences mode
> Chunks are made up of single sentences.

### P10 semantic chunking
> Break content into meaningful units that preserve context and semantic relationships across sentences and paragraphs.

### P11 semantic coherence
> This approach produces chunks that better maintain semantic coherence and can span page boundaries.

### P12 size for models
> Find a chunk size that works best for all of the models you're using.
