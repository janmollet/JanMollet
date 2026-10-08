const education = [
  {
    institution: "Northeastern University",
    degree: "Urban Informatics (MS)",
    date: "January 2025 – Present",
    location: "Boston, USA",
    description:
      "GIS • Big Data • Machine Learning • Transportation Analysis • Urban Sustainability • Smart Cities • Mobility • Data Visualization • Python • SQL • R",
    links: [
      {
        label: "Northeastern",
        url: "https://www.northeastern.edu",
      },
      {
        label: "Program",
        url: "https://cssh.northeastern.edu/policyschool/program/ms-urban-informatics/",
      },
    ],
  },
  {
    institution: "UAB – Barcelona",
    degree: "Smart & Sustainable Cities (BE)",
    date: "2020 – 2023",
    location: "Barcelona, Spain",
    description:
      "Bachelor's degree focused on smart cities, urban sustainability, technology, and urban systems. Thesis: Elderly care via smart technology (9/10).",
    links: [
      {
        label: "UAB",
        url: "https://www.uab.cat",
      },
    ],
  },
];

const certifications = [
  "Harvard – Web & Python (2024)",
  "Wharton – ESG Factors (2023)",
  "Duke – Renewable Energy (2023)",
  "Norwalk CC – Real Estate (2024)",
  "R Fundamentals – Data Science (2025)",
  "GRE: 303/340 (2024)",
  "MUN Bucharest – India at ECOSOC (2018)",
];

const languages = [
  {
    language: "English",
    level: "Professional",
    detail: "TOEFL 100 / 120",
  },
  {
    language: "Spanish",
    level: "Native",
    detail: "",
  },
  {
    language: "Catalan",
    level: "Native",
    detail: "",
  },
  {
    language: "French",
    level: "B2 Intermediate",
    detail: "French Baccalauréat",
  },
];

function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="eyebrow">RESUME</p>
          <h2>My Resume</h2>
          <p>
            An overview of my education, experience, skills, and professional
            journey.
          </p>
        </div>

        {/* EDUCATION */}

        <div className="resume-block">
          <h3 className="resume-block-title">
            <i className="bi bi-mortarboard"></i>
            Education
          </h3>

          <div className="resume-items">
            {education.map((item) => (
              <article
                className="resume-item"
                key={`${item.institution}-${item.degree}`}
              >
                <div className="resume-item-header">
                  <div>
                    <h4>{item.institution}</h4>
                    <p className="resume-role">{item.degree}</p>
                  </div>

                  <div className="resume-meta">
                    <span>{item.date}</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <p>{item.description}</p>

                <div className="resume-links">
                  {item.links.map((link) => (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      key={link.label}
                    >
                      {link.label}
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}

        <div className="resume-block">
          <h3 className="resume-block-title">
            <i className="bi bi-award"></i>
            Certifications & Courses
          </h3>

          <div className="certifications-grid">
            {certifications.map((certification) => (
              <div
                className="certification-item"
                key={certification}
              >
                {certification}
              </div>
            ))}
          </div>
        </div>

        {/* LANGUAGES */}

        <div className="resume-block">
          <h3 className="resume-block-title">
            <i className="bi bi-translate"></i>
            Languages
          </h3>

          <div className="languages-grid">
            {languages.map((language) => (
              <div
                className="language-item"
                key={language.language}
              >
                <h4>{language.language}</h4>
                <p>{language.level}</p>

                {language.detail && (
                  <span>{language.detail}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DOWNLOAD */}

        <div className="resume-download">
          <div>
            <p className="eyebrow">FULL RESUME</p>
            <h3>Want to see the complete version?</h3>
          </div>

          <a
            href="/Jan_Mollet_Resume_UPS.pdf"
            target="_blank"
            rel="noreferrer"
            className="download-button"
          >
            Download Resume
            <i className="bi bi-download"></i>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Resume;