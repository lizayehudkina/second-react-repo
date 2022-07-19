import Header from "../../Header";

const Education = () => {
    return (
        <>
        <main className="education-container">
            <div className="h2-holder">
                <h2>Education</h2>
            </div>
            <table className="edu-table">
              <tr>
                <td className='period'>September 2016 – December 2017</td>
                <td>National University of Life and Environmental Sciences
                  <br />
                  Master`s degree: Finance and Credit
                </td>
              </tr>
              <tr>
                <td className='period'>September 2014 – June 2016</td>
                <td>National University of Life and Environmental Sciences
                  <br />
                  Bachelor of Science: Finance and Credit
                </td>
              </tr>
              <tr>
                <td className='period'>September 2011 - June 2014</td>
                <td>Technology and Economic College Bilotserkivsky National Agrarian University
                  <br />
                  Finance and Credit - basic (cum laude)
                </td>
              </tr>
          </table>

          <div className="h2-holder">
            <h2>Additional education and professional development</h2>
          </div>
          <ul className="add-edu-list">
            <li className="add-edu-item">Excel training (July 2019);</li>
            <li className="add-edu-item">English language courses with native speakers (February 2019);</li>
            <li className="add-edu-item">Courses "Accountant + 1C Program + Chief Accountant" (September 2017 – December 2017);</li>
            <li className="add-edu-item">English language courses with native speakers (January 2017)</li>
          </ul>
        </main>
        </>
    )
}

export default Education;