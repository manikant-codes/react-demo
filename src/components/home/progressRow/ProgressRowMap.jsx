import React from "react";
import Title from "../../common/Title";
import ProgressBar from "./ProgressBar";

const progress = [
  {
    title: "HTML",
    percentage: 100,
  },
  {
    title: "CSS",
    percentage: 70,
  },
  {
    title: "JS",
    percentage: 60,
  },
  {
    title: "React",
    percentage: 50,
  },
];

// const progressBars = [
//   <ProgressBar title="HTML" percentage={100} />,
//   <ProgressBar title="CSS" percentage={70} />,
//   <ProgressBar title="JS" percentage={60} />,
//   <ProgressBar title="React" percentage={50} />,
// ];

function ProgressRowMap() {
  return (
    <div className="p-8">
      <Title title="Progress" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/skills.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl mb-3">
            Voluptatem dignissimos provident quasi corporis voluptas
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col gap-4">
            {progress.map((value, index) => {
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
    </div>
  );
}

export default ProgressRowMap;
