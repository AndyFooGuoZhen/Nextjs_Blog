import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetaData } from "@/components/PostMetaData";

//Function to read files from /posts
const getPostMetadata = (): PostMetaData[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // const slugs = markdownPosts.map((file) => file.replace(".md", ""));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  //Sort by descending date
  posts.sort((a: PostMetaData, b: PostMetaData): any => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  });

  return posts;
};

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((data) => (
    <div>
      <Link href={`/posts/${data.slug}`}>
        <h2>{data.title}</h2>
      </Link>
      <h3>{data.date}</h3>
      <h3>{data.subtitle}</h3>
    </div>
  ));
  return <div>{postPreviews}</div>;
};

export default HomePage;
