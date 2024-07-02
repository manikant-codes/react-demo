import React from "react";
import Title from "../../common/Title";
import PricingRowCard from "./PricingRowCard";

const data = [
  {
    title: "Free Plan",
    price: 0,
    features: {
      one: true,
      two: true,
      three: true,
      four: false,
      five: false,
    },
  },
  {
    title: "Business Plan",
    price: 29,
    features: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: false,
    },
  },
  {
    title: "Developer Plan",
    price: 49,
    features: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: true,
    },
  },
];

// const pricingCards = [
//   <PricingRowCard
//     key={"a"}
//     title="Free Plan"
//     price={0}
//     features={{
//       one: true,
//       two: true,
//       three: true,
//       four: false,
//       five: false,
//     }}
//   />,
//   <PricingRowCard
//     title="Business Plan"
//     key={"b"}
//     price={29}
//     active
//     features={{
//       one: true,
//       two: true,
//       three: true,
//       four: true,
//       five: false,
//     }}
//   />,
//   <PricingRowCard
//     title="Developer Plan"
//     price={49}
//     key={"c"}
//     features={{
//       one: true,
//       two: true,
//       three: true,
//       four: true,
//       five: true,
//     }}
//   />,
// ];

function PricingRow() {
  const pricingCards = data.map((value, index, array) => {
    return (
      <PricingRowCard
        key={index}
        title={value.title}
        price={value.price}
        features={value.features}
      />
    );
  });

  return (
    <div className="p-8">
      <Title title="Pricing" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingCards}
      </div>
    </div>
  );
}

export default PricingRow;
