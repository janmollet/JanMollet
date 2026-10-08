import janImage from "../assets/jan.jpg";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">

        <aside className="about__sidebar">
          <img
            src={janImage}
            alt="Portrait of Jan Mollet Molina"
            className="about__photo"
          />

          <h3>Jan Mollet Molina</h3>

          <p className="about__education">
            Northeastern University
            <br />
            Master of Science, Urban Informatics
          </p>

          <div className="about__contact">
            <a href="mailto:jan10mollet@gmail.com">
              <i className="bi bi-envelope" />
              Email
            </a>

            <a
              href="https://www.northeastern.edu"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-building" />
              Northeastern University
            </a>

            <a
              href="https://www.linkedin.com/in/jan-mollet-molina-1a4b50224/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin" />
              LinkedIn
            </a>

            <a
              href="https://github.com/janmollet"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github" />
              GitHub
            </a>
          </div>
        </aside>

        <div className="about__content">
          <p className="eyebrow">URBAN INFORMATICS · GIS · DATA</p>

          <h1>
            Building smarter cities
            <br />
            through data & technology.
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
            From GIS and spatial analysis to machine learning and transportation
            analytics, I enjoy turning complex datasets into insights that can
            support better decisions and more livable cities.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;