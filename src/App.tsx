
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Experience from './components/Experience';
import Collaborate from './components/Collaborate';

import MelanomaProject from './components/Projects/MelanomaProject';
import TaxiProject from './components/Projects/TaxiProject';
import IntersectionProject from './components/Projects/IntersectionProject';

function Home() {
  return (
    <main>
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Collaborate />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter basename="/JanMollet">
      
<header className="navbar">
  <div className="navbar__inner">
    <a href="/JanMollet/#about" className="navbar__logo">
      JAN MOLLET
    </a>

    <nav>
      <a href="/JanMollet/#about">About</a>
      <a href="/JanMollet/#experience">Experience</a>
      <a href="/JanMollet/#projects">Projects</a>
      <a href="/JanMollet/#resume">Resume</a>
      <a href="/JanMollet/#collaborate">Collaborate</a>
    </nav>
  </div>
</header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/intersection"
          element={<IntersectionProject />}
        />
        <Route path="/projects/taxi" element={<TaxiProject />} />
        <Route path="/projects/melanoma" element={<MelanomaProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
