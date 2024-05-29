import ReactDOM from "react-dom/client";
import "./index.css";

const toDisplay = (
  <div>
    <nav></nav>
    <div>
      <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <h1>Hello World!</h1>
      <p>
        n publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available.
      </p>
    </div>
    <footer></footer>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("my-element"));
root.render(toDisplay);
