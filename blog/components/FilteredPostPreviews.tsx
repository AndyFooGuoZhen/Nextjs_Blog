'use client';
import { PostMetaData } from "./PostMetaData";
import { ChangeEvent, useState } from "react";
import PostPreview from "./PostPreview";

const FilteredPostPreviews = (props: PostMetaData[]) => {

    const PostMetaDatas = Object.values(props);
    const [filterWord, setFilterWord] = useState("");
  
    const handleInputChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setFilterWord(event.target.value.toLowerCase());
    }
    

    const filteredPostMetaDatas = filterWord.trim() === '' ?
    PostMetaDatas
    : PostMetaDatas.filter((data :PostMetaData)=> 
    data.title.toLowerCase().includes(filterWord)||
    data.subtitle.toLowerCase().includes(filterWord));

    const postPreviews = filteredPostMetaDatas.map((data) => (
    <PostPreview key={data.title} {...data} searchTerm={filterWord} />
  ));

    return (
        <div>
             <input
            id="search"
            placeholder="Search blog"
            className="w-full bg-[#e0e5ec] dark:bg-[#1b1b1b] text-gray-800 dark:text-gray-100 rounded-xl mb-12 p-4 shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#121212,inset_-4px_-4px_8px_#242424] focus:outline-none focus:shadow-[inset_6px_6px_12px_#a3b1c6,inset_-6px_-6px_12px_#ffffff] dark:focus:shadow-[inset_6px_6px_12px_#121212,inset_-6px_-6px_12px_#242424] transition-all duration-300 placeholder-gray-400 font-medium"
            onChange={handleInputChange}
            />
            {postPreviews}
        </div>

    );
  };

export default FilteredPostPreviews;
