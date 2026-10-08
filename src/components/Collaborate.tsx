function Collaborate() {
  return (
    <section id="collaborate" className="section collaborate-section">
      <div className="collaborate-container">

        <p className="eyebrow">COLLABORATE</p>

        <h2>Let's build something together.</h2>

        <p className="collaborate-intro">
          I am always interested in collaborating on projects involving
          urban technology, GIS, transportation, data science, and
          sustainable cities.
        </p>

        <div className="collaborate-links">
          <a
            href="mailto:jan10mollet@gmail.com"
            className="collaborate-button"
          >
            Get in touch
            <i className="bi bi-arrow-up-right"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/jan-mollet-molina-1a4b50224/"
            target="_blank"
            rel="noreferrer"
            className="collaborate-secondary"
          >
            LinkedIn
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="https://github.com/janmollet?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="collaborate-secondary"
          >
            GitHub
            <i className="bi bi-github"></i>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Collaborate;