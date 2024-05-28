import './index.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Skills from './component/Skills';
import About from './component/About';
import Projects from './component/Projects';
import GetInTouch from './component/GetInTouch';
import Footer from './component/Footer';
function App() {
  return (
    <>
      <main>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
}

export default App;
