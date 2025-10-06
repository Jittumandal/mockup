// src/AppRoutes.tsx

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BrowseAll from "../pages/BrowseAll";
import Components from "../pages/Components";

import UiKits from "../pages/UiKits";
import Templates from "../pages/Templates";
import Pricing from "../pages/Pricing";
import Blog from "../pages/Blog";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BrowseAll" element={<BrowseAll />} />
      <Route path="/Components" element={<Components />} />
      <Route path="/UiKits" element={<UiKits />} />
        <Route path="/Templates" element={<Templates />} />
          <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Blog" element={<Blog />} />
    </Routes>
  );
}
