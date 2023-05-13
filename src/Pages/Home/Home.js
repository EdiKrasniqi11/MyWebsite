import './Home.css'
import React, { useRef } from 'react'
import Edi from '../../Images/edi-profile.jpg'
import emailjs from '@emailjs/browser'


const Home = () =>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_szb40ax', 'template_piaibdu', form.current, 'mT76i8kn0jPak2Rst')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Thank You for Contacting me!")
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong. In case of emergency contact please email me at edikrasniqi1507@gmail.com. Thank you for your patience.")
      });
  };
    return (
        <>
            <div id="homeFotoDiv">
                <img src={Edi} alt="Profile Pic"/>
                <h2>Hello, I'm Edi Krasniqi</h2>
                <h3>And this is my Website</h3>
            </div>
            <div id="homeDiv">
                <div id="contactDiv">
                    <h2>Contact Me!</h2>
                    <form ref={form} onSubmit={sendEmail} autoComplete="off">
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
