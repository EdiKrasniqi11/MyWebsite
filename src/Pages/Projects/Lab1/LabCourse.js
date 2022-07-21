import './LabCourse.css'

const LabCourse = () =>{
    return (
        <>
            <div id="projectsFotoDiv">
                <h2 className="web-view lab"><a href="../">Home</a> {'>'} <a href="../my-projects">My Projects</a> {'>'} Prishtina University</h2>

                <h2 className="mobile-view lab"><a href="../">Home</a></h2>
                <h2 className="mobile-view lab">v</h2>
                <h2 className="mobile-view lab"><a href="../my-projects">My Projects</a></h2>
                <h2 className="mobile-view lab">v</h2>
                <h2 className="mobile-view lab">Prishtina University</h2>
                <h3>My biggest Project to Date</h3>
            </div>
            <div className="openingParagraph">
                <h3>What does Prishtina University Represent?</h3>
                <p>
                    Prishtina University is by far the biggest and most important Project of my programming journey. The main idea behind this project
                    is the idea of a page that unites many Universities and allows Students, Professors and Page Administrators to interact 
                    with each other using the many functions that are offered by this website. The Website has a functioning log in/register page 
                    along with an interactive header which allows role based pages only accessed through log in authorization some of which I'll be showcasing in this page.
                </p>
            </div>
            <div id="labDescription">
            </div>
        </>
    )
}

export default LabCourse