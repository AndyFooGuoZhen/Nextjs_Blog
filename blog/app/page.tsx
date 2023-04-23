import getPostMetadata from "@/components/getPostMetaData";
import PostPreviews from "@/components/PostPreview";
import React from "react";
import FilteredPostPreviews from "@/components/FilteredPostPreviews";
import caller from "@/components/CallGPT";
import getPostContent from "@/components/getPostContent";
import { PostMetaData } from "@/components/PostMetaData";

//Use .. for spread operator, "take all fields of this object"

const HomePage = async () => {
  const postMetadata = getPostMetadata();

  const postContentData =   await Promise.all(postMetadata.map(async (data:PostMetaData)=>{
    const contentData = getPostContent(data.slug);
    return await caller();
  }));
  
  console.log(postMetadata);

 
  // const postContentData = async () => {


  //   const result = await caller();
  //   console.log(result); // Output: 'hello'
  // };


  // console.log( postContentData);
  const postPreviews =  <FilteredPostPreviews {...postMetadata}/>

  return <div>{postPreviews}</div>;
};

export default HomePage;


