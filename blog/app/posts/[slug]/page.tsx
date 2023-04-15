import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetaData";
import { remark } from "remark";
import html from "remark-html";

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
    <div className="overflow-auto mb-14 prose">
      <h1>{post.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export default PostPage;
