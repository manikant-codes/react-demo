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
          features={{
            1: true,
            2: true,
            3: true,
            4: false,
            5: false,
          }}
        />
        <PricingRowCard
          title="Business Plan"
          price={29}
          features={{
            1: true,
            2: true,
            3: true,
            4: true,
            5: false,
          }}
          active
        />
        <PricingRowCard
          title="Developer Plan"
          price={49}
          features={{
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
          }}
        />
      </div>
    </div>
  );
}

export default PricingRow;
