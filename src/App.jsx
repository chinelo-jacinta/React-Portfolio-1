import './index.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Skills from './component/Skills';
import About from './component/About';
import Projects from './component/Projects';

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Home />
        <Skills />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
