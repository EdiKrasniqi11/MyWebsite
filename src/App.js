import Header from './Header-Footer/Header/Header'
import Footer from './Header-Footer/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/AboutMe/AboutMe'
import Projects from './Pages/Projects/Projects'

function App() {
  let URLcomponents = window.location.href.split('/');
  console.log(URLcomponents[URLcomponents.length-1])
  return (
    <>
      <Header />
      {URLcomponents[URLcomponents.length-1]===""?<Home />:
      URLcomponents[URLcomponents.length-1]==="about-me"?<About />:
      URLcomponents[URLcomponents.length-1]==="my-projects"?<Projects />:null}
      <Footer />
    </>
  );
}

export default App;
