import HOC from "./components/HOC";
import IncrementClick from "./components/IncrementClick";
import IncrementHover from "./components/IncrementHover";
import Parent from "./components/Parent";
// import Home from "./pages/Home";

// function App() {
//   // const IncClick = HOC(IncrementClick);
//   // const IncHover = HOC(IncrementHover);
//   return (
//     <>
//       {/* <Home /> */}
//       {/* <IncClick /> */}
//       {/* <IncHover /> */}
//       <HOC Component={IncrementClick} />
//       <HOC Component={IncrementHover} />
//     </>
//   );
// }

function App() {
  return <Parent />;
}

export default App;
