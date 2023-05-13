import './AboutMe.css'
import Kosova from '../../Images/kosova.png'

const AboutMe = () =>{
    return (
        <>
            <div id="aboutFotoDiv">
                <h2><a href="../">Home</a> {'>'} About Me</h2>
                <h3>Get to know me better as a Programmer</h3>
            </div>
            <div className="openingParagraph">
                <h3>Who Am I?</h3>
                <p>
                    I am Edi Krasniqi, Student at UBT(University of Bussiness and Technology) in Prishtina, 
                    Kosovo entering into my 3rd year of studies majoring in Computer Science and Engineering. I have a lot of hobbies 
                    the most important of which is Programming and Software Development. I've been coding since the age of 17 during my 
                    1st year of studies starting with java and ever since I've gained abilities in many other programming languages and frameworks.
                </p>
            </div>
            <div id="aboutDiv">
                <div className="side l">
                    <div id="personalInfo">
                        <h3>Personal Information</h3>
                        <div id="detailDiv">
                            <div id="personalTitles">
                                <p>Full Name:<br/>
                                Birth Date:<br/>
                                Nationality:<br/>
                                University:<br/>
                                Major:</p>
                            </div>
                            <div id="personalDetails">
                                <p>Edi Krasniqi<br/>
                                07/01/2003<br/>
                                Albanian/Shqipëtar<img src={Kosova} alt=""/><br/>
                                University of Business and Technology<br/>
                                Computer Science and Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side r">
                    <div id="skillsDiv">
                        <h3>Personal Skills and Attributes</h3>
                        <div id="skills">
                            <div className="languages">
                                <div className="column a">
                                    <p>
                                        JavaScript<br/>
                                        ReactJS<br />
                                        Java<br />
                                        Python<br />
                                        PHP<br />
                                        SQL<br />
                                    </p>
                                </div>
                                <div className="column b">
                                    <p>
                                        C#<br />
                                        .NET Core<br/>
                                        TypeScript
                                    </p>
                                </div>
                            </div>
                            <div className="column c">
                                <p>
                                    Leadership Skills<br />
                                    Fast Learner<br />
                                    Take Initiative when Necessary<br />
                                    Creative Problem Solving <br />
                                    Project Management <br />
                                    Ability to Work in Teams
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default AboutMe