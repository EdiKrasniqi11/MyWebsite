import Header from './Header-Footer/Header/Header'
import Footer from './Header-Footer/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/AboutMe/AboutMe'
import Projects from './Pages/Projects/Projects'
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-me" element={<About />}></Route>
        <Route path="/my-projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
