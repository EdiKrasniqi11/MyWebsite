import './Header.css'
import {useState} from 'react'


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
                <a href="/"><li>Home</li></a>
                <a href="/about-me"><li>About me</li></a>
                <a href="/my-projects"><li>Projects</li></a>
                <a href="/curriculum-vitae"><li>Curriculum Vitae</li></a>
                <a href="/this-website"><li>This Website</li></a>
            </ul>
        </header>
    )
}

export default Header