import './LabCourse.css'
import Home from '../../../Images/Lab1/HomeLab.png'
import Login from '../../../Images/Lab1/LoginLab.PNG'
import Transcript from '../../../Images/Lab1/TrasncriptLab.png'
import SetExam from '../../../Images/Lab1/SetExamLab.PNG'
import SetSchedule from '../../../Images/Lab1/SetScheduleLab.PNG'
import Grading from '../../../Images/Lab1/GradingLab.PNG'
import Exchange from '../../../Images/Lab1/ExchangeLab.PNG'
import Staff from '../../../Images/Lab1/StaffLab.PNG'
import Faculty from '../../../Images/Lab1/FacultyLab.PNG'

import React, { useState } from 'react'

const LabCourse = () =>{
    const [slideIndex, setSlideIndex] = useState(0);
    const labSlides = [
        {Image: Home, Title:"Home Page",Description: "A fitting entry to a University Page, the home page has the important task of welcoming whoever enters the site with the key information they need to come across, that being either Students, Faculty Staff or even a random User browsing the internet. The main point of the home page is to create a safe landing space for whoever comes across the site, therefore the information that is provided needs to be simple enough to please a potential student who is interested in using our services or a staff memeber who wants to check in on the latest information the page has to offer. Therefore the Home Page offers the user entry into the News tab or the Photo Gallery, contents of which are editable only by Advanced Staff like a Professor or a Page Administrator(Like me). The NavBar's contents are farily simple and compact where the user can access more detailed versions of the menus provided by the home page, combined with a Login Page that allows the User to access Privilaged Information based on the Users Role."},
        {Image: Login, Title:"Login Page",Description: "The Login Page of every website appears to be the monotone page of the website/application, but it most deffinetly holds the most weight. The Security of a Login page holds a lot of responsibility especially in a high value website such as Prishtina University. Without a Secure Login Page there could be big repercussions such as: sensitive data manipulation, spreading of missinformation or even data deletion which could cause a failiure of the whole system. Therefore the main goal of this page was security rather than design or other details that could take away from the functionality of it. The Login page works in the same way as most other websites do, the User in this case would enter their personal email and password by which the system checks the validity and assigns the role of the user such as Student, Professor or Admin, after which the data is stored and with the help of react-secure-storage encrypted in such way that it is hard if not impossible to change the contens in a way that gives the user more privileges that they require. If the user is not an active member of the staff then he is offered with a registration form where his data is sent to a waitlist which we will be talking in a later slide."},
        {Image: Transcript, Title:"Transcript",Description: "Comming from a Student, the Transcript is probably the most viewed page in my application. Connecting through the database and filtering the Grading Table through with the StudentID that is stored in the LocalStorage during the login proccess, the transcript compiles the grades that a Student has been able to achieve during their years as students, combined with a GPA and a total of ECTS(Credits) We could complete a simple transcript example that is useful for visualizing and estimating a Students Success Rate. This page is only visible to the Student who is logged in the website and without loggin in using a Student Account you wont be able to access this information."},
        {Image: SetExam, Title:"Exams",Description: "Another Student Only Page, the Exam Page allows Students to make themselves eligible for grading in a certain Subject. The way that the Database Table is executed a specific Student with a certain Student ID can only make themselves for 1 Subject and cannot attempt to be graded for the same Subject even if they try to apply to a different Professor. In the UI that is presented We can see that we are presented with the option of making ourselves eligible by clicking on the \"Paraqit Provimin\", after which you will get a confirm window to check for any missclicks. After which the button then changes into \"Anulo Paraqitjen\" which allows the Student to cancel the grading proccess. The data then gets passed on to the database table which is presented to the subject Professor to allow grading to be finalized."},
        {Image: SetSchedule, Title:"Schedule",Description: "The last Student Only Page that we have to cover in this Project is the Schedule Page. Fairly simple to Create and Explain the Schedule with a 2 input CRUD Table, the insertion method works taking the Student ID that is stored during the login and the input from the Student themselves which creates a sleek and simple design pattern to make the scheduling proccess as stress free and non-error prone as possible."},
        {Image: Grading, Title:"Grading",Description: "Moving on from the Student Pages we go into the Professor Category. The Goal with these pages is to give Professor simple and easy access to the functions that are most important to their relationship with Students. As I am not very familiar with Professor Responsibilities, the Field of Work was very small to work with, but still there are some parts of a Professors Job that I am failry educated in and my skillset allowed me to turn those ideas into actual concepts and then into the final product that is presented in the UI screenshot. Using filtering and ternary operations the Professor is presented with a select tag which lists all of said Professors Subjects and after picking one the + sign opens a form with 2 inputs which is another select tag with all of the Students who have selected the subject under that professor, and the Grade that the Student has achieved during the Grading Process. Given the situation where the Subject hasn't been chosen another input will be added to the form asking for the Subject to be specified."},
        {Image: Exchange, Title:"Exchange",Description: "Another Fairly Simple Page, the Exchange Page deals with the Student Exchange where Professors choose the Students who have stood out from the rest to experience life as a Student of another University. The Input form in this case has 2 inputs which are filled out; 1 of them being the Student which is filtered by Major, where if a professor teaches 1 Major they cannot select a Student from another Major or another University, the other being the selected University where the Student will be going."},
        {Image: Staff, Title:"Staff Managemennt",Description: "Moving into the Administrator side of Things, this has to be the most important subcategory given the Administrators Impact on Data, some of which having to do with Staff Data and Student Acceptance. As We can see from the sidebar to the left of the UI we have 4 categories of Data Manipulation: Student, Professor, Administrator and Waitlist. While the Student, Professor and Administrator Pages follow the same Blueprint of Organizing, the Waitlist CRUD has possibly the most interesting functionality of it. from the Options column we can see that except for the basic options like view detailed data and edit data which follow the forementioned subcategories; we are presented with 2 extra options accept and deny. The Deny Option follows the same logic as a Delete Option would in other CRUDS where the data is permanently deleted from the databased and not saved anywhere else; but the accept option is where we see more backend manipulation and more \"interesting\" coding per say. what the Accept option does is connect the API Calls of the Student Data table with the Wishlist table data that is fetched from the Register form mentioned earlier. Following a Counter-Intuitive function the Accept option actually deletes the data stored from the Waitlist but before that the information is transfered to the Student Data Table."},
        {Image: Faculty, Title:"Faculty",Description: "Going into the last CRUD table editor, we are presented with the Faculty Page. In this category we have everything that has to do with how the Universities are ran, beginning with The Actual Universities where we specify their names, locations, Majors, Subjects in those majors, subjects professors, University branches, Master majors, etc. All of them being individual CRUD tables connected together using parameters passed on by the url. Using either Hooks in Functional Components or more creative solutions in Class Components(splitting the url and taking away from it's last element). The display of data is similar to other table shapes but the subcategories create a more complex connection that makes inserting, editing and sorting data much much easier."},
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
            <div className="projectsFotoDiv">
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
            </div>
        </>
    )
}

export default LabCourse