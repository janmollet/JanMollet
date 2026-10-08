import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Experience from './components/Experience';
import Collaborate from './components/Collaborate';

function App() {
  return (
    <>
      <header className="navbar">
        <div className="navbar__inner">
          <a href="#about" className="navbar__logo">
            JAN MOLLET
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#collaborate">Collaborate</a>
          </nav>
        </div>
      </header>

      <main>
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Collaborate />
      </main>
    </>
  );
}

export default App;