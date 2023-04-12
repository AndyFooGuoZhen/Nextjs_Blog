import fs from "fs";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  return content;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);
  return (
    <div>
      HEllo this is post : {slug}
      <p>{content}</p>
    </div>
  );
};

export default PostPage;
