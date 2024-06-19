import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import UseEffectDemo from "./pages/UseEffectDemo";
import CustomHookDemo from "./pages/CustomHookDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="useEffect" element={<UseEffectDemo />} />
          <Route path="customHook" element={<CustomHookDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
