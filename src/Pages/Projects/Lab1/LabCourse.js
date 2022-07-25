import './LabCourse.css'
import Home from '../../../Images/Lab1/HomeLab.png'
import Transcript from '../../../Images/Lab1/TrasncriptLab.png'
import SetExam from '../../../Images/Lab1/SetExamLab.PNG'
import SetSchedule from '../../../Images/Lab1/SetScheduleLab.PNG'

import React, { useState } from 'react'

const LabCourse = () =>{
    const [slideIndex, setSlideIndex] = useState(0);
    const labSlides = [
        {Image: Home, Title:"Home Page",Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {Image: Transcript, Title:"Transcript",Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {Image: SetExam, Title:"Exams",Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {Image: SetSchedule, Title:"Schedule",Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    ]
    function slideBack(){
        if(slideIndex>0){
            setSlideIndex(slideIndex-1)
        }else{
            setSlideIndex(labSlides.length - 1)
        }
    }
    function slideForward(){
        if(slideIndex<labSlides.length - 1){
            setSlideIndex(slideIndex+1)
        }else{
            setSlideIndex(0)
        }
    }
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
            <div className="slider">
                <img src={labSlides[slideIndex].Image} alt=""/>
                <div className="slideText">
                    <h1>{labSlides[slideIndex].Title}</h1>
                    <p>{labSlides[slideIndex].Description}</p>
                </div>
                <div className="slideClick back" onClick={() => slideBack()}/>
                <div className="slideClick forward" onClick={() => slideForward()}/>
                <div className="slideCounter">
                    {labSlides.map((item,index) => (
                        <div key={index} className={slideIndex==index?"slideCircle active":"slideCircle"} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default LabCourse