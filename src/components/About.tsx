
import janImage from "../assets/jan.jpg";

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-container">
        <div className="about__grid">
          {/* Left column: portrait */}
          <div className="about__photo-column">
            <img
              src={janImage}
              alt="Portrait of Jan Mollet Molina"
              className="about_photo"
            />
          </div>

          {/* Right column: personal information */}
          <div className="about__info-column">
            <p className="eyebrow">
              URBAN INFORMATICS · GIS · DATA
            </p>

            <h3>Jan Mollet Molina</h3>

            <p>
              Northeastern University
              <br />
              Master of Science, Urban Informatics
            </p>

            <div className="about__contact">
              <a href="mailto:jan10mollet@gmail.com">
                <i className="bi bi-envelope" aria-hidden="true" />
                Email
              </a>

              <a
                href="https://www.northeastern.edu"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-building" aria-hidden="true" />
                Northeastern University
              </a>

              <a
                href="https://www.linkedin.com/in/jan-mollet-molina-1a4b50224/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin" aria-hidden="true" />
                LinkedIn
              </a>

              <a
                href="https://github.com/janmollet"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr />

        {/* Personal introduction */}
        <div className="about-content">
          <h1>
            Building smarter cities
            <br />
            through data &amp; technology.
          </h1>

          <p>
            I am Jan Mollet Molina, a graduate student in Urban Informatics
            at Northeastern University with a background in Smart and
            Sustainable Cities.
          </p>

          <p>
            My work sits at the intersection of urban systems, geospatial
            technology, data science, and transportation. I am particularly
            interested in using data and technology to understand complex
            urban challenges and develop practical solutions.
          </p>

          <p>
            From GIS and spatial analysis to machine learning and
            transportation analytics, I enjoy turning complex datasets
            into insights that can support better decisions and more
            livable cities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
