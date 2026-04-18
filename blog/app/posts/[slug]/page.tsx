
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

const PostPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params; //dynamic path from [slug]
  const post = getPostContent(slug);

  const processedContent = await remark().use(html).use(remarkGfm).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className=" mb-14 p-2">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.data.title}</h1>
      <h2 className="text-lg text-gray-600 mb-12 font-medium">{post.data.date}</h2>
       <div
        className="font-medium text-gray-800 prose prose-headings:text-gray-900 prose-a:text-blue-600 max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
};

export default PostPage;
