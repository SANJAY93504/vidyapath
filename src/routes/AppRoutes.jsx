import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import ClassPage from "../pages/ClassPage";
import SubjectPage from "../pages/SubjectPage";
import ChapterPage from "../pages/ChapterPage";
import About from "../pages/About";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route
  path="/"
  element={
    <MainLayout>
      <Home />
    </MainLayout>
  }
/>
      <Route path="/class" element={<ClassPage />} />
      <Route path="/subject" element={<SubjectPage />} />
      <Route path="/chapter" element={<ChapterPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;