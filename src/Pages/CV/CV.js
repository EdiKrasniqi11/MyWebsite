import './CV.css'


const CV = () => {
    return(
        <>
            <div className="curriculumFotoDiv">
                <h2 className="web-view curriculum"><a href="../">Home</a> {'>'} Curriculum Vitae</h2>
                <h3 className="web-view curriculum">My experience in Programming</h3>
            </div>
            <div className="curriculumVitaeContainer">
                <div className="leftSide">
                    <p><b>Personal Information</b></p><br/>
                    <p>Name</p>
                    <p>Address</p>
                    <p>E-mail</p><br/>
                    <p><b>Education and Training</b></p><br/>
                    <p>Nov,2020 - Present</p><br/><br/>
                    <p>Sep,2017 - Jun,2020</p><br/><br/>
                    <p>Feb,2022 - Jul,2022</p><br/><br/>
                    <p>Aug,2018 - Oct,2018</p><br/><br/>
                    <p>Mar,2017</p><br/><br/>
                    <p>Aug,2017</p><br/><br/><br/>
                    <p><b>Skills</b></p><br/><br/><br/><br/><br/><br/><br/>
                    <p><b>Personal Skills <br/>and Competences</b></p><br/>
                    <p>Skills</p><br/><br/><br/><br/><br/><br/>
                    <p>Languages</p>
                </div>
                <div className="rightSide">
                    <br/><br/>
                    <p>Edi Krasniqi</p>
                    <p>St. Hora e Arbresheve, No.62, Fushe Kosove, 12000, Kosovo</p>
                    <p>edikrasniqi1507@gmail.com</p>
                    <br/><br/><br/>
                    <p>University of Computer Science and Engineering</p>
                    <p>"University of Business and Technology", Prishtina, Kosovo</p><br/>
                    <p>High School</p>
                    <p>Gymnasium of Natural Sciences "Hivzi Sulejmani", Fushe Kosove, Kosovo</p><br/>
                    <p>ICT {'&'} Digital Skills Training on Java Enterprise and Mobile Programming</p>
                    <p>"ICT for Kosovo's Growth", Kosovo</p><br/>
                    <p>CCNA Routing and Switching: Introduction to Networks</p>
                    <p>"American University of Kosovo Training and Development Institute", Prishtina, Kosovo</p><br/>
                    <p>Lego EV3, Little Bits and Arduino Spring Camp Workshop</p>
                    <p>"Shkolla Digjitale", Prishtina, Kosovo</p><br/>
                    <p>Junior IT Computer Architecture, Network Security and Multimedia</p>
                    <p>"Shkolla Digjitale", Prishtina, Kosovo</p><br/><br/><br/>
                    <p>Java</p>
                    <p>C#</p>
                    <p>JavaScript</p>
                    <p>ReactJS</p>
                    <p>PHP</p>
                    <p>Python</p><br/><br/><br/><br/>
                    <p>Leadership Skills</p>
                    <p>Fast Learner</p>
                    <p>Creative Problem Solving</p>
                    <p>Software Design and Development</p>
                    <p>Ability to Work Well with Others</p>
                    <p>Project Management</p><br/>
                    <p><b>Albanian</b></p>
                    <p>Mother Tongue</p><br/>
                    <p><b>English</b></p>
                    <p>Fluent in Speaking and Writing</p>
                </div>
            </div>
            <div className="downloadCVDiv">
                    <a href="cv.pdf" download><button className="downloadButton">Download CV</button></a>
            </div>
        </>
    )
}

export default CV