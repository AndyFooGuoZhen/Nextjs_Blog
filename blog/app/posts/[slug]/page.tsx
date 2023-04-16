import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetaData";
import { remark } from "remark";
import html from "remark-html";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
// ReactMarkdown

//For future reference in case markdown not working
//https://stackoverflow.com/questions/70075003/nextjs-global-css-header-element-doesnt-apply-to-a-parsed-markdown-replaced-by

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

//For static generation of pages, we need to let it know the slugs (fileNames)
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({ slug: post.slug }));
};

const PostPage = async (props: any) => {
  const slug = props.params.slug; //dynamic path from [slug]
  const post = getPostContent(slug);

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className=" mb-14 ">
      <h1 className="text-3xl font-bold">{post.data.title}</h1>
      <h2 className="text-md mb-10 text-gray-400">{post.data.date}</h2>

      <div
        className="prose md:prose-lg lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
};

export default PostPage;
