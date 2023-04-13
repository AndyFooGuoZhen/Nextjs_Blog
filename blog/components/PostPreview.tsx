import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

//Every title for main page , props is of type PostMetaData
const PostPreviews = (props: PostMetaData) => {
  return (
    <div className="mt-20">
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <h3>{props.date}</h3>
      <h3>{props.subtitle}</h3>
    </div>
  );
};

export default PostPreviews;
