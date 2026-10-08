const projects = [
  {
    title: "Melanoma Across Spain",
    question:
      "How can spatial analysis improve melanoma detection and prevention?",
    image: "/assets/virus.png",
    description:
      "Spatial analysis of melanoma incidence using R and ArcGIS.",
    pdf: "/assets/Melanoma.pdf",
  },
  {
    title: "Roxbury Crossing Intersection Analysis",
    question:
      "How can we optimize traffic flow and signal timing in urban areas?",
    image: "/public.jpg",
    description:
      "Traffic congestion and signal timing optimization study in Boston.",
    pdf: "/assets/ROXBURY_CROSSING.pdf",
  },
  {
    title: "Vitals: Data-Driven Insights into Care and Recovery",
    question:
      "Can data analysis improve healthcare outcomes and addiction support?",
    image: "/doctor.jpg",
    description:
      "Exploring healthcare quality and substance abuse treatment trends through data.",
    pdf: "/assets/Collection1.pdf",
  },
  {
    title: "ICU/SICU Intervention Insights",
    question:
      "How can SQL identify top hospitals for ICU and SICU intervention programs?",
    image: "/hospital.jpg",
    description:
      "Analyzing ICU and SICU bed data to guide strategic hospital selection.",
    pdf: "/assets/Collection2.pdf",
  },
  {
    title: "Predicting Taxi Driver Tips Using NYC Green Taxi Data",
    question:
      "How can we use NYC Green Taxi trip data and k-NN regression to predict taxi driver tip amounts?",
    image: "/robot.jpg",
    description:
      "Analyzing NYC Green Taxi data to predict driver tips using a k-NN regression model.",
    pdf: "/assets/Collection3.pdf",
  },
  {
    title: "Passenger Activity Forecasting",
    question:
      "Can we forecast March passengers using moving averages, exponential smoothing, and regression?",
    image: "/forecasting.jpg",
    description:
      "Using 2008–2018 data to predict 2019 and compare models with MSE and RMSE.",
    pdf: "/assets/Collection4.pdf",
  },
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

                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;