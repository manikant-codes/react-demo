import React, { useState } from "react";
import { faqs } from "./Accordion";
import AccordionSingleItem from "./AccordionSingleItem";

function AccordionSingleVisible() {
  const [visibleFaqId, setVisibleFaqId] = useState(1);

  return (
    <div className="flex flex-col gap-2">
      {faqs.map((faq) => {
        return (
          <AccordionSingleItem
            key={faq.id}
            faq={faq}
            visibleFaqId={visibleFaqId}
            setVisibleFaqId={setVisibleFaqId}
          />
        );
      })}
    </div>
  );
}

export default AccordionSingleVisible;
