import React from "react";
import Title from "../../common/Title";
import PricingCard from "./PricingCard";

const pricing = [
  {
    title: "Free Plan",
    price: 0,
    features: {
      1: true,
      2: true,
      3: true,
      4: false,
      5: false,
    },
    active: false,
  },
  {
    title: "Business Plan",
    price: 29,
    features: {
      1: true,
      2: true,
      3: true,
      4: true,
      5: false,
    },
    active: true,
  },
  {
    title: "Developer Plan",
    price: 49,
    features: {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
    },
    active: false,
  },
];

// const pricingCards = [
//   <PricingCard
//     title="Free Plan"
//     price={0}
//     features={{
//       1: true,
//       2: true,
//       3: true,
//       4: false,
//       5: false,
//     }}
//   />,
//   <PricingCard
//     title="Business Plan"
//     price={29}
//     active
//     features={{
//       1: true,
//       2: true,
//       3: true,
//       4: true,
//       5: false,
//     }}
//   />,
//   <PricingCard
//     title="Developer Plan"
//     price={49}
//     features={{
//       1: true,
//       2: true,
//       3: true,
//       4: true,
//       5: true,
//     }}
//   />,
// ];

function PricingRowMap() {
  return (
    <div className="p-8">
      <Title title="Pricing" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricing.map((value, index) => {
          return (
            <PricingCard
              key={index}
              title={value.title}
              price={value.price}
              features={value.features}
              active={value.active}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PricingRowMap;
