import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UseStateIntro from "./components/demo/UseStateIntro";
import List from "./components/demo/viewsDemo/List";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="use-state-intro" element={<UseStateIntro />} />
        <Route path="view-demo" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
