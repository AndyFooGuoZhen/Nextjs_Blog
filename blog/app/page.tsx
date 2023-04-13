import Link from "next/link";
import getPostMetadata from "@/components/getPostMetaData";
import PostPreviews from "@/components/PostPreview";

//Use .. for spread operator, "take all fields of this object"
const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((data) => (
    <PostPreviews key={data.title} {...data} />
  ));
  return <div>{postPreviews}</div>;
};

export default HomePage;
