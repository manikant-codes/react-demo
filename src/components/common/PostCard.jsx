import React from "react";

function PostCard(props) {
  const { post } = props;
  return (
    <div className="bg-slate-200 p-4 rounded-lg border border-slate-300">
      <p className="mb-2 font-bold text-indigo-400">{post.id}</p>
      <h3 className="text-xl mb-2">{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default PostCard;
