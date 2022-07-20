import stylist from './Home.css'
import React, { useRef } from 'react';
import ReactLogo from '../../Images/react-logo.png'
import JavaLogo from '../../Images/java-logo.png'
import PhpLogo from '../../Images/php-logo.png'
import PythonLogo from '../../Images/python-logo.png'
import SqlLogo from '../../Images/sql-logo.png'
import Edi from '../../Images/edi-profile.jpg'
import emailjs from '@emailjs/browser';


const Home = () =>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4sbkfq7', 'template_piaibdu', form.current, 'mT76i8kn0jPak2Rst')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Thank You for Contacting me!")
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <>
            <div id="homeFotoDiv">
                <img src={Edi}/>
                <h2>Hello, I'm Edi Krasniqi</h2>
                <h3>And this is my Website</h3>
            </div>
            <div id="homeDiv">
                <div id="contactDiv">
                    <h2>Contact Me!</h2>
                    <form ref={form} onSubmit={sendEmail}>
                      <input type="text" name="user_name" className="textInput" placeholder="Name"/><br/>
                      <input type="email" name="user_email" className="textInput" placeholder="Email"/><br/>
                      <textarea name="message" placeholder="Message"/><br/>
                      <input type="submit" value="Send" className="submitButton"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home