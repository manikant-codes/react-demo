import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import UseEffectDemo from "./pages/UseEffectDemo";
import CustomHookDemo from "./pages/CustomHookDemo";
import Memo from "./pages/Memo";
import UseMemoDemo from "./pages/UseMemoDemo";
import UseRefDemo from "./pages/UseRefDemo";
import UseContextDemo from "./pages/UseContextDemo";
import UseReducerDemo from "./pages/UseReducerDemo";
import UseReducerTodos from "./pages/UseReducerTodos";
import ReduxDemo from "./pages/ReduxDemo";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeShop from "./pages/cakeShop/CakeShop";
import CakeDetails from "./pages/cakeShop/CakeDetails";
import CakeShopLayout from "./pages/cakeShop/layouts/CakeShopLayout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="useEffect" element={<UseEffectDemo />} />
            <Route path="customHook" element={<CustomHookDemo />} />
            <Route path="memo" element={<Memo />} />
            <Route path="useMemo" element={<UseMemoDemo />} />
            <Route path="useRef" element={<UseRefDemo />} />
            <Route path="useContext" element={<UseContextDemo />} />
            <Route path="useReducer" element={<UseReducerDemo />} />
            <Route path="useReducerTodos" element={<UseReducerTodos />} />
            <Route path="redux" element={<ReduxDemo />} />
          </Route>
          <Route path="/" element={<CakeShopLayout />}>
            <Route path="cakeShop" element={<CakeShop />} />
            <Route path="cakeDetails/:id" element={<CakeDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
