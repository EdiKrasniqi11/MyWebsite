import './Header.css'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'


const Header = () =>{
    const [navBar, setNavBar] = useState(false);
    const [toggle, setToggle] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY !== 0){
            setNavBar(true)
        }else{
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <header className={navBar?"headerDiv active":"headerDiv"}>
            <ul id="mobileView">
                <NavLink className="link" to="/"><h2>Edi Krasniqi</h2></NavLink>
                <svg onClick={() => setToggle(!toggle)} cursor="pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="rgb(219, 239, 255)" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </ul>
            <ul className={toggle?"navList active":"navList"}>
                <NavLink onClick={() => setToggle(false)} className="link" to="/"><li>Home</li></NavLink>
                <NavLink onClick={() => setToggle(false)} className="link" to="/about-me"><li>About me</li></NavLink>
                <NavLink onClick={() => setToggle(false)} className="link" to="/my-projects"><li>Projects</li></NavLink>
                <NavLink onClick={() => setToggle(false)} className="link" to="/curriculum-vitae"><li>Curriculum Vitae</li></NavLink>
            </ul>
        </header>
    )
}

export default Header