import './Projects.css'
import Container from '../../components/ProjectContainer'
import Students from '../../Images/Students.jpg'
import ECommerce from '../../Images/eCommerce.jpg'
import landscape from '../../Images/landscape.jpg'

const Projects = () =>{
    return (
        <>
            <div id="projectsFotoDiv">
                <h2 className="web-view projects"><a href="../">Home</a> {'>'} My Projects</h2>
                <h3 className="web-view projects">Take a look at my prior work</h3>
            </div>
            <div className="openingParagraph">
                <h3>My Experience in Programming?</h3>
                <p>
                    Although I am somewhat new to Programming and Software Engineering, I'm very familiar with working in Projects; be that Programming, 
                    Networking, or even other Fields of Study. Throughout my 2 years of coding I've managed to be part of a few projects that 
                    I am proud to say have succeeded due to my partition in them. My projects range from smaller ideas(like a tetris simulation game)
                    to bigger projects that incorporate full stack development using languages like: React, C#(ASP.Net), MSSQL, PHP, Vanilla JavaScript,
                    etc. Most if not all of them being documented in my GitHub Profile.
                </p>
            </div>
            <div id="projectsDiv">
            <Container path="/my-projects/tech-commerce" image={ECommerce} title="TechCom" description="Technology Based E-Commerce"/>
            <Container path="/my-projects/lab-course-1" image={Students} title="Prishtina University" description="University System Managment"/>
            </div>
        </>
    )
}

export default Projects