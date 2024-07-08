import React from "react";
import PageTitle from "../components/common/PageTitle";
import AccordionSingleVisible from "../components/faqs/AccordionSingleVisible";

function FAQs() {
  return (
    <div className="p-8">
      <PageTitle title="FAQs" />
      <div className="mt-8">
        <AccordionSingleVisible />
      </div>
    </div>
  );
}

export default FAQs;
