import React, { useState } from "react";
import PageTitle from "../components/common/PageTitle";
import WorkTabs from "../components/work/WorkTabs";
import Gallery from "../components/work/Gallery";

function Work() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="p-8">
      <PageTitle title="Our Recent Work" />
      <WorkTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Gallery key={Date.now()} activeTab={activeTab} />
    </div>
  );
}

export default Work;
