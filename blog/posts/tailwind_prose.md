---
title: "Tailwind typography - Prose class "
subtitle: "Discovered the use of prose for formatting markdowns"
date: "2023-04-15"
tags: "Cool"
---

#### How I came to use prose in the first place

- While building the blog app using Next.JS and tailwind css, I was trying to render markdown texts into html
- I followed multiple solutions online that uses ReactMarkdown library or markdown-to-jsx but those implementations keep failing for my project for some reason
- Stumbled upon a solution online that uses tailwind typograhy that invloves the use of dangerouslySetInnerHtml tag

#### What is prose used for?

- Used for adding typographic defaults to HTML code that isn't directly added by the user (dangerouslySetInnerHtml for markdown is one example)
- Remove browser default styling to html, once tailwind's prose is added to parent tag, width can't be easilly controlled
- Width can be changed using prose-sm, prose-lg instead

#### Links:

[Solution to problem I was having](https://stackoverflow.com/questions/70075003/nextjs-global-css-header-element-doesnt-apply-to-a-parsed-markdown-replaced-by)
