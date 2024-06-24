import React from "react";
import Title from "../common/Title";

function InfoRow(props) {
  // if (props.imageFirst) {
  //   return (
  //     <div className="p-8">
  //       <Title title={props.title} />
  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //         <div className="h-[400px] rounded-lg overflow-hidden ">
  //           <img
  //             src={props.img}
  //             alt=""
  //             className="h-full w-full object-cover"
  //           />
  //         </div>
  //         <div>
  //           <p className="text-xl mb-8">{props.desc}</p>
  //           <button className="bg-indigo-600 px-6 py-3 rounded-full text-white hover:bg-indigo-800">
  //             Know More
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  // return (
  //   <div className="p-8">
  //     <Title title={props.title} />
  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //       <div className="order-2 md:order-1">
  //         <p className="text-xl mb-8">{props.desc}</p>
  //         <button className="bg-indigo-600 px-6 py-3 rounded-full text-white hover:bg-indigo-800">
  //           Know More
  //         </button>
  //       </div>
  //       <div className="h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
  //         <img src={props.img} alt="" className="h-full w-full object-cover" />
  //       </div>
  //     </div>
  //   </div>
  // );

  function showAlert(e) {
    const myPara = document.getElementById("my-para");
    // const paraContainer = document.getElementById("para-container");

    // const newPara = document.createElement("p");
    // newPara.innerText = "New Paragraph";

    // paraContainer.appendChild(newPara);

    if (myPara.style.display === "none") {
      myPara.style.display = "block";
    } else {
      myPara.style.display = "none";
    }
  }

  return (
    <>
      {props.imageFirst ? (
        <div className="p-8">
          <Title title={props.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-[400px] rounded-lg overflow-hidden ">
              <img
                src={props.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div id="para-container">
                <p id="my-para" className="text-xl mb-8">
                  {props.desc}
                </p>
              </div>
              <button
                onclick="showAlert()"
                onClick={function (e) {
                  showAlert();
                }}
                className="bg-indigo-600 px-6 py-3 rounded-full text-white hover:bg-indigo-800"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8">
          <Title title={props.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <p className="text-xl mb-8">{props.desc}</p>
              <button className="bg-indigo-600 px-6 py-3 rounded-full text-white hover:bg-indigo-800">
                Know More
              </button>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <img
                src={props.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoRow;
