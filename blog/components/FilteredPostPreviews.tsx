'use client';
import Link from "next/link";
import { PostMetaData } from "./PostMetaData";
import { ChangeEvent, useState, useEffect} from "react";
import PostPreview from "./PostPreview";

const FilteredPostPreviews = (props: PostMetaData[]) => {

    const PostMetaDatas = Object.values(props);
    const [filterWord, setFilterWord] = useState("");
  
    const handleInputChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setFilterWord(event.target.value.toLowerCase());
    }
    

    const filteredPostMetaDatas = filterWord.trim() ===' ' ?
    PostMetaDatas
    : PostMetaDatas.filter((data :PostMetaData)=> 
    data.title.toLowerCase().includes(filterWord)|| data.tags.toLowerCase().includes(filterWord)||
    data.subtitle.toLowerCase().includes(filterWord));

    const postPreviews = filteredPostMetaDatas.map((data) => (
    <PostPreview key={data.title} {...data} />
  ));

    return (
        <div>
             <input
            id="search"
            placeholder="Search blog"
            className=" w-full bg-slate-600 rounded-lg mb-8 p-2 text-white"
            onChange={handleInputChange}
            />
            {postPreviews}
        </div>

    );
  };

export default FilteredPostPreviews;
