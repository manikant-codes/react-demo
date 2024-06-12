import React, { useState } from "react";
import PostCard from "./PostCard";

function PostsList() {
  const [posts, setPosts] = useState(null);

  function getData() {
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
  }

  console.log(posts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-8">
      <button
        onClick={getData}
        className="bg-indigo-900 rounded-lg text-white hover:bg-indigo-600"
      >
        Get Data
      </button>
      {posts?.map((post, index) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
}

export default PostsList;
