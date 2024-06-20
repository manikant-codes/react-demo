import React from "react";
import Title from "../../common/Title";
import PricingRowCard from "./PricingRowCard";

function PricingRow() {
  return (
    <div className="p-8">
      <Title title="Pricing" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PricingRowCard
          title="Free Plan"
          price={0}
          // features={{
          //   one: true,
          //   two: true,
          //   three: true,
          //   four: false,
          //   five: false,
          // }}
          one
          two
          three
        />
        <PricingRowCard
          title="Business Plan"
          price={29}
          active
          // features={{
          //   one: true,
          //   two: true,
          //   three: true,
          //   four: true,
          //   five: false,
          // }}
          one
          two
          three
          four
        />
        <PricingRowCard
          title="Developer Plan"
          price={49}
          // features={{
          //   one: true,
          //   two: true,
          //   three: true,
          //   four: true,
          //   five: true,
          // }}
          one
          two
          three
          four
          five
        />
      </div>
    </div>
  );
}

export default PricingRow;
