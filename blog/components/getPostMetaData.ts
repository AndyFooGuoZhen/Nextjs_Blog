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
    const {data , content: matterResult} = matter(fileContents);


    //write tags here if tags is empty, call gpt api here
      if(data.tags == ""){
      const newTags = 'testTags';
      const updatedData = {...data, tags: newTags};
      const updatedContent = matter.stringify(matterResult, updatedData);
      fs.writeFileSync(`posts/${fileName}`, updatedContent);
    }

    return {
      title: data.title,
      date: data.date,
      subtitle: data.subtitle,
      slug: fileName.replace(".md", ""),
      tags: data.tags,
    };
  });

  //Sort by descending date
  posts.sort((a: any, b: any): any => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  });

  return posts;
};

export default getPostMetadata;
