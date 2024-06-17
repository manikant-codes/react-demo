import React from "react";
import Title from "../../common/Title";
import ServiceCard from "./ServiceCard";
import {
  faHeartPulse,
  faTowerBroadcast,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

function ServicesRow() {
  return (
    <div className="p-8">
      <Title title="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ServiceCard
          title="Service 1"
          icon={faHeartPulse}
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum"
        />
        <ServiceCard
          title="Service 2"
          icon={faVectorSquare}
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum"
        />
        <ServiceCard
          title="Service 3"
          icon={faTowerBroadcast}
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum"
        />
        <ServiceCard
          title="Service 4"
          icon={faCalendar}
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur delectus culpa cupiditate voluptas placeat quos dignissimos, temporibus, consectetur eum"
        />
      </div>
    </div>
  );
}

export default ServicesRow;
