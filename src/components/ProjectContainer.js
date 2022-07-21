import {NavLink} from 'react-router-dom'

export default function ProjectContainer(props){
    return(
            <div className="container">
                <NavLink to={props.path}>
                    <img src={props.image} alt=""/>
                    <div className="overlay">
                        <div className="text t">{props.title}</div>
                        <div className="text d">{props.description}</div>
                    </div>
                </NavLink>
            </div>
    )
}
