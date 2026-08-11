import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VisitorPanel from "./components/VisitorPanel";
import MusicPlayer from "./components/MusicPlayer";
import RouteMeta from "./components/RouteMeta";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <BrowserRouter>
        <RouteMeta />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="pt-20 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
             </Routes>
          </main>
          <Footer />
          <VisitorPanel />
          <MusicPlayer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
