import React, { useEffect, useState } from "react";
import PostCard from "../components/common/PostCard";
import useFetch from "../customHooks/useFetch";
import useScroll from "../customHooks/useScroll";

function UseEffectDemo() {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [scroll, moveToTop] = useScroll();

  if (!posts) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-8">
      {posts?.map((post, index) => {
        return <PostCard key={post.id} post={post} />;
      })}
      {scroll > 4000 && (
        <button
          className="fixed right-[70px] bottom-[70px] bg-indigo-500 px-4 py-2 rounded-full text-white font-bold"
          onClick={moveToTop}
        >
          Move to Top
        </button>
      )}
    </div>
  );
}

export default UseEffectDemo;