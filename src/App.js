import Header from './Header-Footer/Header/Header'
import Footer from './Header-Footer/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/AboutMe/AboutMe'
import Projects from './Pages/Projects/Projects'
import LabCourse from './Pages/Projects/Lab1/LabCourse'
import TechCommerce from './Pages/Projects/TechCommerce/TechCommerce'
import CV from './Pages/CV/CV'
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-me" element={<About />}/>
        <Route path="/my-projects" element={<Projects />}/>
        <Route path="/my-projects/lab-course-1" element={<LabCourse />}/>
        <Route path="/my-projects/tech-commerce" element={<TechCommerce />}/>
        <Route path="/curriculum-Vitae" element={<CV />}/>z
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
