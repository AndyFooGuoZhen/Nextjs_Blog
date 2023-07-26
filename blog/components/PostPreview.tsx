import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

//Every title for main page , props is of type PostMetaData
const PostPreview = (props: PostMetaData) => {

  let tags: string[] = [""];

  if(props.tags !== null && props.tags.includes(",")){
     tags = props.tags.split(",");
  }

  const tagElements = tags.map((tag, index) => {
    return <h5 className=" px-1 border border-slate-400 rounded-md mr-1 mt-1 text-xs text-slate-300" key={index}>{tag}</h5>;
  });

  return (
    <div className="mb-8 p-3 rounded-lg hover:p-6 ease-in-out duration-300 nm-concave-slate-700">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold font-abel text-slate-200">{props.title}</h2>
        <h3 className="text-sm  text-slate-300">{props.date}</h3>
        {/* <h3 className="text-sm  text-slate-300">{props.subtitle}</h3> */}
        <div className="flex flex-wrap items-start">{tagElements}</div>
      </Link>
    </div>
  );
};

export default PostPreview;
