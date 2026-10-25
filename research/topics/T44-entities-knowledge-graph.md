# T44 NER, Knowledge Graph, Schema.org and JSON-LD (entities-knowledge-graph)
Volatility: evolving. Stage 3.

## Idea to leave with
Structured data is a way to tell Google, in a standard vocabulary, what a page and the things on it are. It must match visible content, it is not a ranking or AI-visibility switch, and entity links (sameAs) help disambiguate an organization.

## What a practitioner does differently
- Use JSON-LD where the setup allows (S008#P3) with schema.org types (S010#P1).
- Mark up only what users can see; misleading markup risks a manual action (S009#P1-P4).
- Add Organization markup with sameAs links to disambiguate; no property is required (S011).
- Do not add "AI schema" expecting AI Overviews inclusion (S007#P3).

## Findings
- Definition and purpose (S008#P1, P2); JSON-LD recommended (S008#P3); rich result eligibility depends on guidelines (S008#P4).
- Schema.org supports Microdata, RDFa, JSON-LD (S010#P2).
- Policy: true representation, visible content, no deception, manual action (S009).
- Organization: disambiguation and sameAs (S011#P2, P3).
- Knowledge Graph Search API finds entities and uses schema.org types and JSON-LD (S019).
- GraphRAG: an LLM derives an entity knowledge graph and community summaries for global questions (S012). One paragraph only; a method for RAG systems, not evidence of web engines.

## Conflicts
None. Claims that schema "feeds the Knowledge Graph" are not supported by saved quotes; left out.

## Dead ends
Google knowledge-panels page failed to fetch. Named entity recognition: IR-book page blocked by robots; no saved NER source, so no NER items.

## Cut
NER mechanics, knowledge panel claiming, entity SEO tactics from vendor blogs (grade C/D).

## R1 fixes
sameAs is described only as the URL of another page about the organization (S011#P3); disambiguation is attributed to 'some properties' (S011#P2) without naming sameAs. S008#P5 added for the guidelines antecedent.
