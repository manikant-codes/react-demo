import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

// function myComponent(msg, name, age) {
//   return <h1>Hello {msg}!</h1>;
// }

function Message(props) {
  return <h1>Hello {props.msg}</h1>;
}

function MyComponent(props) {
  return <Message msg={props.msg} />;
}

const root = ReactDOM.createRoot(document.getElementById("my-element"));
root.render(
  <>
    <MyComponent msg="Hello" />
    <MyComponent msg="Class" />
    <MyComponent msg="123" />
    {/* {myComponent("World")}
    {myComponent("Class")}
    {myComponent("123")} */}
  </>
);
