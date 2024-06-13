import React, { useEffect, useState } from "react";
import PostCard from "../components/home/PostCard";

function UseEffectDemo() {
  const [posts, setPosts] = useState(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPosts(data);
      })
      .catch(function (error) {
        console.log("Error: ", error);
      });
  }, []);

  function moveToTop() {
    window.scroll(0, 0);
  }

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
