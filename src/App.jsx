import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import UseEffectDemo from "./pages/UseEffectDemo";
import CustomHookDemo from "./pages/CustomHookDemo";
import Memo from "./pages/Memo";
import UseMemoDemo from "./pages/UseMemoDemo";
import UseRefDemo from "./pages/UseRefDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="useEffect" element={<UseEffectDemo />} />
          <Route path="customHook" element={<CustomHookDemo />} />
          <Route path="memo" element={<Memo />} />
          <Route path="useMemo" element={<UseMemoDemo />} />
          <Route path="useRef" element={<UseRefDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
