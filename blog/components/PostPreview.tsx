import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

//Every title for main page , props is of type PostMetaData
const PostPreviews = (props: PostMetaData) => {
  return (
    <div className="mb-8 p-3 shadow-md rounded-lg hover:shadow-2xl hover:p-6 ease-in-out duration-300">
      <Link href={`/posts/${props.slug}`}>
        <h2 className=" font-abel">{props.title}</h2>
        <h3>{props.date}</h3>
        <h3>{props.subtitle}</h3>
      </Link>
    </div>
  );
};

export default PostPreviews;
