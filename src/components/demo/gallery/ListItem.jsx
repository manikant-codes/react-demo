import React from "react";

function ListItem(props) {
  return (
    <div className="bg-slate-200 rounded-lg border border-slate-300 flex items-center p-2">
      <div className="h-[56px] w-[56px] rounded-full overflow-hidden">
        <img
          src={props.value.img}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{props.value.name}</h3>
        <p>{props.value.desc}</p>
      </div>
    </div>
  );
}

export default ListItem;
