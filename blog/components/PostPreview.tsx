import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

interface PostPreviewProps extends PostMetaData {
  searchTerm?: string;
}

const PostPreview = (props: PostPreviewProps) => {
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) => 
          regex.test(part) ? (
            <mark key={i} className="bg-yellow-200 text-black rounded-sm px-0.5">{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div className="mb-8 p-6 rounded-2xl transition-all duration-300 bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_9px_9px_16px_rgb(163,177,198,0.6),inset_-9px_-9px_16px_rgba(255,255,255,0.5)]">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold font-abel text-gray-800 text-xl mb-1">
          {props.searchTerm ? highlightText(props.title, props.searchTerm) : props.title}
        </h2>
        <h3 className="text-sm text-gray-500 font-medium">{props.date}</h3>
      </Link>
    </div>
  );
};

export default PostPreview;
