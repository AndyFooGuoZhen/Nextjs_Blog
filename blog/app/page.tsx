import getPostMetadata from "@/components/getPostMetaData";
import PostPreviews from "@/components/PostPreview";
import React from "react";
import { ChangeEvent } from "react";
import ClientComponent from "@/components/clientComponent";

// let word = "";

// const filterWord = () => {
//   if (document !== null && document.getElementById("search") !== null) {
//     const input: HTMLElement | null = document.getElementById("search");
//     console.log(input);
//   }
// };

// const handleSearch = () => {
//   return (
//     <div>
//       <input
//         id="search"
//         placeholder=" Search posts"
//         className="border-slate-300 border-2 w-full rounded-lg mb-8 p-1"
//       />
//       <button className="border-slate-300 border-2 w-full rounded-lg">
//         press
//       </button>
//     </div>
//   );
// };

//Use .. for spread operator, "take all fields of this object"

const HomePage = () => {
  const postMetadata = getPostMetadata();

  const postPreviews = postMetadata.map((data) => (
    <PostPreviews key={data.title} {...data} />
  ));

  return <div>{postPreviews}</div>;
};

export default HomePage;

// const HomePage = () => {
//   const postMetadata = getPostMetadata();

//   const postPreviews = postMetadata.map((data) => (
//     <PostPreviews key={data.title} {...data} />
//   ));

//   // <div>
//   //   <ClientComponent>

//   //   </ClientComponent>
//   // </div>
//   return <div>{postPreviews}</div>;
// };

// export default HomePage;
