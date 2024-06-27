import React from "react";
import Title from "../../common/Title";
import ProgressBar from "./ProgressBar";

function ProgressRow() {
  const row = [
    {
      title: "HTML",
      percentage: 90,
    },
    {
      title: "JS",
      percentage: 80,
    },
    {
      title: "CSS",
      percentage: 70,
    },
    {
      title: "REACT",
      percentage: 60,
    },
  ];

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
            {/* <ProgressBar title="HTML" percentage={100} />
            <ProgressBar title="CSS" percentage={70} />
            <ProgressBar title="JS" percentage={60} />
            <ProgressBar title="React" percentage={50} /> */}
            {row.map((value, index) => {
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

export default ProgressRow;
