
import getPostMetadata from "@/components/getPostMetaData";
import { remark } from "remark";
import remarkGfm from 'remark-gfm'
import remarkParse from "remark-parse";

import html from "remark-html";
import getPostContent from "@/components/getPostContent";
// ReactMarkdown

//For future reference in case markdown not working
//https://stackoverflow.com/questions/70075003/nextjs-global-css-header-element-doesnt-apply-to-a-parsed-markdown-replaced-by



//For static generation of pages, we need to let it know the slugs (fileNames)
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({ slug: post.slug }));
};

const PostPage = async (props: any) => {
  const slug = props.params.slug; //dynamic path from [slug]
  const post = getPostContent(slug);

  const processedContent = await remark().use(html).use(remarkGfm).process(post.content);
  const contentHtml = processedContent.toString();

  let tags: string[] = [""];

  if(post.data.tags.includes(",")){
     tags = post.data.tags.split(",");
  }

  const tagElements = tags.map((tag, index) => {
    return <h5 className=" px-1 border border-slate-300 rounded-md mr-1 mt-1 text-slate-300   text-xs" key={index}>{tag}</h5>;
  });

  return (
    <div className=" mb-14 p-2">
      <h1 className="text-3xl font-bold text-slate-300">{post.data.title}</h1>
      <h2 className="text-md text-slate-300">{post.data.date}</h2>
      <div className="flex mb-10 items-start">{tagElements}</div>
       <div
        className="font-semibold text-slate-300 prose prose-headings:text-slate-200 prose-a:text-slate-200"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
};

export default PostPage;
