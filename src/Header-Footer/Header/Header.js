import './Header.css'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'


const Header = () =>{
    const [navBar, setNavBar] = useState(false);

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
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about-me"><li>About me</li></NavLink>
                <NavLink to="/my-projects"><li>Projects</li></NavLink>
                <NavLink to="/curriculum-vitae"><li>Curriculum Vitae</li></NavLink>
                <NavLink to="/this-website"><li>This Website</li></NavLink>
            </ul>
        </header>
    )
}

export default Header