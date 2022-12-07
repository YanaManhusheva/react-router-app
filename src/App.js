import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/page" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
