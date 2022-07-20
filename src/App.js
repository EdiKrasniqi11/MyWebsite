import Header from './Header-Footer/Header/Header'
import Footer from './Header-Footer/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/AboutMe/AboutMe'
import Projects from './Pages/Projects/Projects'

function App() {
  let URLcomponents = window.location.href.split('/');
  return (
    <>
      <Header />
      {URLcomponents[-1]===""?<Home />:
      URLcomponents[-1]==="about-me"?<About />:
      URLcomponents[-1]==="my-projects"?<Projects />:null}
      <Footer />
    </>
  );
}

export default App;
