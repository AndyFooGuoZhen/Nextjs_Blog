import getPostMetadata from "@/components/getPostMetaData";
import PostPreviews from "@/components/PostPreview";
import React from "react";
import FilteredPostPreviews from "@/components/FilteredPostPreviews";

//Use .. for spread operator, "take all fields of this object"

const HomePage = async () => {
  const postMetadata = getPostMetadata();
  const postPreviews =  <FilteredPostPreviews {...postMetadata}/>

  return <div>{postPreviews}</div>;
};

export default HomePage;


