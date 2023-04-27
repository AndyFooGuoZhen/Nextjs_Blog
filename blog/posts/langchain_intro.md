---
title: 'Langchain introduction '
subtitle: >-
  Brief introduction to Langchain
date: '2023-04-26'
tags: 
---

#### Why use Langchain?:

##### Great for scalability

- As our data or model gets bigger, langchain has a memory module to "remember" the context of the previous input
- Eliminates the need to read all data or entire chunks of data from the beginning, utimately saving costs on reading tokens

##### Better indexing 

- With large amount of texts parsed into our model (such as a large PDF file), we can 
use chunking to break down large amount of texts into smaller segments
- We can use RecursiveCharacterTextSplitter() method for this

##### Provides better context

- As our input data gets larger, it becomes harder for us to define accurate prompts to acheieve our objectives, Langchain provides a really good abstraction for handling these kinds of problem

#### Other things I've learned 

##### Indexing

- Process of structuring input data so that LLM's can "understand" it

##### Embeddings

- Converts texts into numbers, and stores the numbers into a vector format

##### Vectorstore

- Databases designed to store embeddings
- Example databases include : Pinecone, Milvus, Supabase


#### Things I want to learn more about

- How is lanchain used in Next.js projects?
- Storing embeddings into vectorstore databases
- Inner workings of embeddings and vectorstores 

#### Links:
[Video](https://www.youtube.com/watch?v=bH722QgRlhQ)
