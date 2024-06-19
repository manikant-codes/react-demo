import React from "react";
import Title from "../../common/Title";
import PricingCard from "./PricingCard";

function PricingRow() {
  return (
    <div className="p-8">
      <Title title="Pricing" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PricingCard
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
        <PricingCard
          title="Business Plan"
          price={29}
          active
          features={{
            1: true,
            2: true,
            3: true,
            4: true,
            5: false,
          }}
        />
        <PricingCard
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
