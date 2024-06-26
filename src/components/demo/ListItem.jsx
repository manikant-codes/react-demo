import React from "react";

function ListItem(props) {
  return (
    <li className="bg-indigo-200 p-4 rounded-lg">
      <p className="flex items-center gap-4">
        <span className="font-bold">{props.id}.</span>
        <span>{props.name}</span>
      </p>
    </li>
  );
}

export default ListItem;
