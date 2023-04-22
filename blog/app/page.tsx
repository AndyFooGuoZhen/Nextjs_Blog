import getPostMetadata from "@/components/getPostMetaData";
import PostPreviews from "@/components/PostPreview";
import React from "react";
import { ChangeEvent } from "react";
import ClientComponent from "@/components/clientComponent";
import FilteredPostPreviews from "@/components/FilteredPostPreview";

//Use .. for spread operator, "take all fields of this object"

const HomePage = () => {
  const postMetadata = getPostMetadata();

  const postPreviews =  <FilteredPostPreviews {...postMetadata}/>
  return <div>{postPreviews}</div>;
};

export default HomePage;

// const HomePage = () => {
//   const postMetadata = getPostMetadata();

//   const postPreviews = postMetadata.map((data) => (
//     <PostPreviews key={data.title} {...data} />
//   ));


//   return <div>{postPreviews}</div>;
// };

// export default HomePage;
