import React, { useState } from "react";

const workTabs = [
  { id: 1, name: "All" },
  { id: 2, name: "App" },
  { id: 3, name: "Card" },
  { id: 4, name: "Web" },
];

function WorkNav(props) {
  return (
    <ul className="flex items-center justify-center gap-4 mt-8">
      {workTabs.map((tab) => {
        return (
          <li
            key={tab.id}
            className={`rounded-full ${
              props.activeTab === tab.id
                ? "bg-indigo-500 text-white"
                : "bg-indigo-200 text-black"
            } hover:bg-indigo-500 hover:text-white border border-indigo-300 px-4 py-2 cursor-pointer`}
            onClick={() => {
              props.setActiveTab(tab.id);
            }}
          >
            {tab.name}
          </li>
        );
      })}
    </ul>
  );
}

export default WorkNav;
