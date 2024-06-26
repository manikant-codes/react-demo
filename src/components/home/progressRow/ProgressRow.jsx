import React from "react";
import Title from "../../common/Title";
import ProgressBar from "./ProgressBar";

const data = [
  { title: "HTML", percentage: 100 },
  { title: "CSS", percentage: 80 },
  { title: "JS", percentage: 70 },
  { title: "React", percentage: 60 },
];

// const elements = [
//   <ProgressBar key={0} title="HTML" percentage={100} />,
//   <ProgressBar key={1} title="CSS" percentage={80} />,
//   <ProgressBar key={2} title="JS" percentage={70} />,
//   <ProgressBar key={3} title="React" percentage={60} />,
// ];

function ProgressRow() {
  // const elements = data.map(function (value, index) {
  //   return (
  //     <ProgressBar
  //       key={index}
  //       title={value.title}
  //       percentage={value.percentage}
  //     />
  //   );
  // });

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <img
          src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/skills.png"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-indigo-600 mb-8">
          Voluptatem dignissimos provident quasi corporis voluptas
        </h2>
        <p className="mb-4 italic text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* <div className="flex flex-col gap-2">
          <ProgressBar title="HTML" percentage={100} />
          <ProgressBar title="CSS" percentage={80} />
          <ProgressBar title="JS" percentage={70} />
          <ProgressBar title="React" percentage={60} />
        </div> */}
        <div className="flex flex-col gap-2">
          {data.map(function (value, index) {
            return (
              <ProgressBar
                key={index}
                title={value.title}
                percentage={value.percentage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProgressRow;
