import './Footer.css'
import {useState} from 'react'

const Footer = () =>{
    return (
        <footer className="footerDiv">
            <ul>
                <a href="https://www.linkedin.com/in/edi-krasniqi-61a98b238/" target="_blank"><li>LinkedIn</li></a>
                <a href="mailto:edikrasniqi1507@gmail.com" target="_blank"><li>Email</li></a>
                <a href="https://github.com/EdiKrasniqi11" target="_blank"><li>GitHub</li></a>
                <a href="https://www.instagram.com/edikr11/?hl=en" target="_blank"><li>Instagram</li></a>
            </ul>

        </footer>
    )
}

export default Footer