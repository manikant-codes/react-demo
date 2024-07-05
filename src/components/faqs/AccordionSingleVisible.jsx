import React, { useState } from "react";
import { faqs } from "./Accordion";
import AccordionSingleItem from "./AccordionSingleItem";

function AccordionSingleVisible() {
  const [visibleFaqId, setVisibleFaqId] = useState(1);

  console.log("visibleFaq", visibleFaqId);

  function showHideFaq(id) {
    setVisibleFaqId(id);
  }

  return (
    <div className="flex flex-col gap-2">
      {faqs.map((faq) => {
        return (
          <AccordionSingleItem
            key={faq.id}
            faq={faq}
            visibleFaqId={visibleFaqId}
            showHideFaq={showHideFaq}
          />
        );
      })}
    </div>
  );
}

export default AccordionSingleVisible;
