import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

//Every title for main page , props is of type PostMetaData
const PostPreview = (props: PostMetaData) => {

  let tags: string[] = [""];

  if(props.tags.includes(",")){
     tags = props.tags.split(",");
  }

  const tagElements = tags.map((tag, index) => {
    return <h5 className=" px-1 border rounded-md mr-1 mt-1 text-gray-400 text-xs" key={index}>{tag}</h5>;
  });

  return (
    <div className="mb-8 p-3 shadow-md rounded-lg hover:shadow-2xl hover:p-6 ease-in-out duration-300">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold font-abel">{props.title}</h2>
        <h3 className="text-sm">{props.date}</h3>
        <h3 className="text-gray-400 text-sm">{props.subtitle}</h3>
        <div className="flex items-start">{tagElements}</div>
      </Link>
    </div>
  );
};

export default PostPreview;
