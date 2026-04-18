import fs from "fs";
import matter from "gray-matter";
import { PostMetaData } from "@/components/PostMetaData";

//Function to read files from /posts
const getPostMetadata = (): PostMetaData[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data } = matter(fileContents);

    return {
      title: data.title,
      date: data.date,
      subtitle: data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  //Sort by descending date
  posts.sort((a: any, b: any): any => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  });

  return posts;
};

export default getPostMetadata;
