import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage";
import MinecraftMods from "./pages/MinecraftMods";
import PythonProjects from "./pages/PythonProjects";
import ReactProjects from "./pages/ReactProjects";
import CppProjects from "./pages/CppProjects";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/python-projects" element={<PythonProjects />} />
        <Route path="/minecraft-mods" element={<MinecraftMods />} />
        <Route path="/react-projects" element={<ReactProjects />} />
        <Route path="/cpp-projects" element={<CppProjects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
