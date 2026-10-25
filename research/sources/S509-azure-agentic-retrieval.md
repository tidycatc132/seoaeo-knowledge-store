---
id: S509
url: https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview
title: Agentic retrieval in Azure AI Search
publisher: Microsoft Learn (Azure AI Search)
grade: A
page_date: 2026-09-16
opened: 2026-10-25
status: used
---
Summary: Microsoft documentation of a multi-query retrieval pipeline that decomposes a query into subqueries. Graded for what Azure AI Search does only.
## Passages
### P1 definition
> is a multi-query pipeline designed for complex questions posed by users or agents in chat and copilot apps.
### P2 planning
> Can use LLM-based query planning (preview) to break down a complex query into smaller, focused subqueries for better coverage across proprietary and external content.
### P3 parallel
> Runs subqueries in parallel. Each subquery is semantically reranked to promote the most relevant matches.
### P4 chat history
> Query planning can use chat history for additional context.
### P5 merge
> Combines the best results into a unified response that an LLM can use to generate grounded answers.
