import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { ThemeContext } from "./context/ThemeContext";
import { Skills } from "./pages/Skills/Skills";
import { Background } from "./components/BackgroundImage/Background";
import { Project } from "./pages/Projects/Project";
import { Contact } from "./pages/Contact/Contact";

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Background />
      <div className={isDark ? "dark" : "light"}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
