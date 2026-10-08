const experiences = [
  {
    company: "United Parcel Service (UPS)",
    role: "Operations Research Analytics Developer Co-op",
    location: "Boston, MA",
    date: "January – August 2026",
    description:
      "Developed high-rise delivery optimization strategies by researching 3D modeling and building analytical tools with C# and WPF. Engineered efficient routing solutions using the .NET SDK to solve complex Vehicle Routing Problems (VRP).",
    link: "https://www.ups.com/us/en/home",
  },
  {
    company: "Northeastern University",
    role: "Geographic Information Systems (GIS) Teaching Assistant",
    location: "Boston, MA",
    date: "September – December 2025 & September – December 2026",
    description:
      "Provided guidance on spatial data analysis, map design, and effective use of GIS tools for policy and urban applications. Assisted students in troubleshooting projects and assignments using ArcGIS and QGIS.",
    link: "https://www.northeastern.edu",
  },
  {
    company: "Cultural Care Au Pair",
    role: "Childcare",
    location: "Connecticut, USA",
    date: "November 2023 – November 2024",
    description:
      "Provided daily childcare while supporting educational activities and participating in a cultural exchange experience in the United States.",
    link: "https://www.culturalcare.com",
  },
  {
    company: "UrbanTree Partners",
    role: "Consulting",
    location: "Catalonia, Spain",
    date: "June – August 2023",
    description:
      "Consulted on urban sustainability projects, data analysis, and strategies aimed at creating greener and more sustainable urban environments.",
    link: "https://www.urbantreepartners.com",
  },
  {
    company: "CADS – Sustainability Council",
    role: "Internship",
    location: "Catalonia, Spain",
    date: "February – June 2023",
    description:
      "Worked on sustainability reporting and stakeholder engagement while supporting initiatives focused on reducing environmental impacts.",
    link: "https://cads.gencat.cat/ca/inici/index.html",
  },
  {
    company: "Tais Events",
    role: "Hostess",
    location: "Catalonia, Spain",
    date: "May 2022 – May 2023",
    description:
      "Supported event operations by coordinating logistics, assisting guests, and ensuring smooth event experiences.",
    link: "https://www.taisevents.com",
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Professional Experience</h2>
          <p>
            A combination of research, technology, GIS, operations research,
            sustainability, and international experience.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={`${experience.company}-${experience.role}`}
            >
              <div className="experience-date">
                {experience.date}
              </div>

              <div className="experience-main">
                <h3>{experience.role}</h3>

                <a
                  href={experience.link}
                  target="_blank"
                  rel="noreferrer"
                  className="company-link"
                >
                  {experience.company}
                  <i className="bi bi-arrow-up-right"></i>
                </a>

                <p className="experience-location">
                  {experience.location}
                </p>

                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;