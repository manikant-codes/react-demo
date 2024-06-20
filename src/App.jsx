import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import UseEffectDemo from "./pages/UseEffectDemo";
import CustomHookDemo from "./pages/CustomHookDemo";
import Memo from "./pages/Memo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="useEffect" element={<UseEffectDemo />} />
          <Route path="customHook" element={<CustomHookDemo />} />
          <Route path="memo" element={<Memo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
