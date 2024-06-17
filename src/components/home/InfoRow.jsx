import React from "react";
import ImageFirstRow from "./ImageFirstRow";
import ContentFirstRow from "./ContentFirstRow";

function InfoRow(props) {
  // if (props.imageFirst) {
  //   return (
  //     <ImageFirstRow title={props.title} desc={props.desc} img={props.img} />
  //   );
  // }
  // return (
  //   <ContentFirstRow title={props.title} desc={props.desc} img={props.img} />
  // );
  return (
    <>
      {props.imageFirst ? (
        <ImageFirstRow title={props.title} desc={props.desc} img={props.img} />
      ) : (
        <ContentFirstRow
          title={props.title}
          desc={props.desc}
          img={props.img}
        />
      )}
    </>
  );
}

export default InfoRow;
