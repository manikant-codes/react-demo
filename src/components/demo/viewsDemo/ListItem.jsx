import React from "react";

function ListItem(props) {
  return (
    <div className="bg-slate-100 border border-slate-300 rounded-lg flex gap-2 p-4">
      <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
        <img
          src={props.place.img}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold">{props.place.title}</h2>
        <p>{props.place.desc}</p>
      </div>
    </div>
  );
}

export default ListItem;
