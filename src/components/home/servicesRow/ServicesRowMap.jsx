import React from "react";
import Title from "../../common/Title";
import ServiceCard from "./ServiceCard";
import {
  faHeartPulse,
  faTowerBroadcast,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const services = [
  {
    title: "Service 1",
    icon: faHeartPulse,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum",
  },
  {
    title: "Service 2",
    icon: faVectorSquare,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum",
  },
  {
    title: "Service 3",
    icon: faTowerBroadcast,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum",
  },
  {
    title: "Service 4",
    icon: faCalendar,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum",
  },
];

// const servicesCards = [
//   <ServiceCard
//     title="Service 1"
//     icon={faHeartPulse}
//     desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum"
//   />,
//   <ServiceCard
//     title="Service 2"
//     icon={faVectorSquare}
//     desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum"
//   />,
//   <ServiceCard
//     title="Service 3"
//     icon={faTowerBroadcast}
//     desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum"
//   />,
//   <ServiceCard
//     title="Service 4"
//     icon={faCalendar}
//     desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum"
//   />,
// ];

function ServicesRowMap() {
  return (
    <div className="p-8">
      <Title title="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((value, index) => {
          return (
            <ServiceCard
              key={index}
              title={value.title}
              icon={value.icon}
              desc={value.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServicesRowMap;
