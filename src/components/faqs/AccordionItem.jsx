import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function AccordionItem(props) {
  const [showAns, setShowAns] = useState(false);

  function showHideAns() {
    setShowAns(!showAns);
  }

  return (
    <div className="bg-indigo-100 p-4 rounded-lg border border-indigo-200">
      <div className="flex items-center justify-between mb-2">
        <p className="text-lg font-semibold flex items-top gap-2">
          <span>{props.faq.id}</span>
          <span>{props.faq.que}</span>
        </p>
        <button onClick={showHideAns}>
          {showAns ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      {showAns && <p>{props.faq.ans}</p>}
    </div>
  );
}

export default AccordionItem;
