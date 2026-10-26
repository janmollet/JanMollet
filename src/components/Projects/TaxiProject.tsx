import taxiReport from "../../../public/projects/Collecting3.pdf"

function TaxiProject() {
  return (
    <section className="project-detail">
      <div className="container">
      <div className='row'>
        <div className='col'>
          <h1 className="project-title">
            Predicting Taxi Driver Tips
            <span>Using NYC Green Taxi Data</span>
          </h1>
        </div>

          <div className='col center_vertically'>
            <a className='project-button'
            href={taxiReport}
            download
            >DOWNLOAD THE FULL REPORT

              <i className="bi bi-download"></i>
            
            </a>
            </div>
      </div>
        <hr className="project-divider" />

        <h3 className="section-titles-projects"> ABSTRACT</h3>
        <p className='justify-paragraph'>

                Traffic congestion in <b>Boston</b> significantly impacts daily commutes, air quality,
                and urban mobility. This study analyzes <b>traffic delays and levels of service (LOS)</b>
                at the <b>Roxbury Crossing</b> intersection using simulation models. Signal timing is also
                optimized based on simulation inputs and outputs to reduce average delays. The
                analysis was performed using <b>Synchro and Vistro</b>, incorporating traffic volume data
                from 2018 and signal timing plans from both 2018 and 2025. Since the available traf-
                fic counts may not reflect current conditions, a <b>sensitivity analysis</b> was conducted
                using three different volume scenarios. This approach evaluates how changes in
                traffic volumes across different lanes affect overall intersection performance.
        </p>

        <h3 className="section-titles-projects"> INTERSECTION LOCATION</h3>

        <p className='justify-paragraph'>The intersection of Tremont Street, Columbus Avenue, and Malcolm X Boulevard in
            Roxbury Crossing, Boston, is a major transit hub that facilitates the movement of daily
            commuters, residents, and commercial traffic. The Roxbury Crossing intersection is surrounded by several schools, colleges, and a bus
              station:</p>

            <ul>
              <li>
                  Northeastern University
              </li>
              <li>
                  Roxbury Community College
              </li>
              <li>
                  Fenway High School
              </li>
               <li>
                  Boston Adult High School
              </li>
               <li>
                  James P. Middle School
              </li>
               <li>
                  Nubian (Bus Station)
              </li>
            </ul>

        <img className='image_projects' src="a" alt="intersection_real" />

        <h3 className="section-titles-projects"> INTERSECTION DIAGRAM</h3>

        <p className='justify-paragraph'>A diagram of the intersection is provided to clarify its geometry and lane configurations. 
          Green arrows indicate incoming traffic (entering the intersection), 
          while red arrows indicate outgoing traffic (exiting the intersection).
        </p>

        <img className='image_projects' src="a" alt="intersection_diagram" />

        
        <h3 className="section-titles-projects"> TRAFFIC VOLUME COUNT AND SIGNAL TIME 2018 AND 2025</h3>
        <div className='margin_top_defined'>
            <h4  className='text-center'> Traffic Volume Count</h4>
            <img className='image_projects' src="a" alt="volume_counts" />
        </div>

        <div className='row margin_top_defined'>

          <div className='col'>
            <h4  className='text-center'> Signal Time in 2018</h4>
              <img src="a" alt="signal_2018" />
          </div>

          <div className='col'>
            <h4 className='text-center'>Signal Time in 2025</h4>
              <img src="a" alt="signal_2025" />
          </div>
        </div>

        

      </div>
    </section>
  );

}

export default TaxiProject;