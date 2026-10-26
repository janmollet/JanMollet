import melanomaImage from "../assets/melanoma.webp"
import taxiImage from "../assets/taxi.webp"
import intersectionImage from "../assets/intersection.webp"
import {Link } from 'react-router-dom';

const projects = [
  {
    title: "Roxbury Crossing Intersection Analysis",
    question:
      "How can we optimize traffic flow and signal timing in urban areas?",
    image: intersectionImage,
    description:
      "Traffic congestion and signal timing optimization study in Boston.",
    pdf: "/JanMollet/projects/ROXBURY_CROSSING.pdf",
    project_name: "intersection"
  },
  
  {
    title: "Predicting Taxi Driver Tips Using NYC Green Taxi Data",
    question:
      "How can we use NYC Green Taxi trip data and k-NN regression to predict taxi driver tip amounts?",
    image: taxiImage,
    description:
      "Analyzing NYC Green Taxi data to predict driver tips using a k-NN regression model.",
    pdf: "/JanMollet/projects/Collecting3.pdf",
    project_name: "taxi"
  },
  {
    title: "Melanoma Across Spain",
    question:
      "How can spatial analysis improve melanoma detection and prevention?",
    image: melanomaImage,
    description:
      "Spatial analysis of melanoma incidence using R and ArcGIS.",
    pdf: "/JanMollet/projects/Melanoma.pdf",
    project_name: "melanoma"
  }
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="eyebrow">PROJECTS</p>
          <h2>Projects & Studies</h2>
          <p>
            Selected academic and analytical projects exploring urban systems,
            GIS, transportation, healthcare, and data science.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <p className="project-question">
                  {project.question}
                </p>

                <h3>{project.title}</h3>

                <p>{project.description}</p> 

              
                <div className="center-button">
                  <Link
                    to={`/projects/${project.project_name}`}
                    className="project-button"
                  >
                    <span>PROJECT OVERVIEW</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>

                
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;