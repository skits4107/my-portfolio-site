import "./ProjectsNavigation.css"
import ProjectBtn from "../ProjectBtn/ProjectBtn";
import react from "../../assets/react.svg";


function ProjectsNavigation(){
    return (
        <div className="ProjectsNavContainer">
            <ProjectBtn src={react} text="react"/>
            <ProjectBtn src={react} text="react"/>
            <ProjectBtn src={react} text="react"/>
            <ProjectBtn src={react} text="react"/>
        </div>
    );
}

export default ProjectsNavigation;