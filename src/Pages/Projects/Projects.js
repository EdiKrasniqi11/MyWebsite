import './Projects.css'
import Container from '../../components/ProjectContainer'
import landscape from '../../Images/landscape.jpg'

const Projects = () =>{
    return (
        <>
            <div id="projectsFotoDiv">
                <h2><a href="../">Home</a> {'>'} My Projects</h2>
                <h3>Take a look at my prior work</h3>
            </div>
            <div class="openingParagraph">
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
                <Container image={landscape} title="Hello World" description="Description"/>
            </div>
        </>
    )
}

export default Projects