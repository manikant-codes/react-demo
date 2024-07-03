import React from "react";

function Events() {
  function showName(name) {
    alert("Hello, " + name);
  }

  return (
    <div className="flex h-[100vh] items-center justify-center p-8">
      <div className="bg-indigo-200 p-4 rounded-lg shadow-sm max-w-[500px]">
        <h1 className="text-2xl">Events</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          voluptatem molestias! Repellendus molestiae nam doloremque eaque totam
          deleniti error sunt aspernatur voluptas architecto ducimus accusamus
          velit ipsum blanditiis, sint doloribus?
        </p>
        <button
          onClick={function () {
            showName("John Doe");
          }}
          className="mt-4 bg-indigo-500 hover:bg-indigo-700 px-4 py-2 rounded-lg text-white"
        >
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default Events;
