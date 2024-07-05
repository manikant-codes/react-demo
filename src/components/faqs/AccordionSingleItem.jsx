import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AccordionSingleItem(props) {
  const showFaq = props.visibleFaqId === props.faq.id;

  return (
    <div className="bg-indigo-100 p-4 rounded-lg border border-indigo-200">
      <div className="flex items-center justify-between mb-2">
        <p className="text-lg font-semibold flex items-top gap-2">
          <span>{props.faq.id}</span>
          <span>{props.faq.que}</span>
        </p>
        <button
          onClick={() => {
            props.showHideFaq(props.faq.id);
          }}
        >
          {showFaq ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      {showFaq && <p>{props.faq.ans}</p>}
    </div>
  );
}

export default AccordionSingleItem;
