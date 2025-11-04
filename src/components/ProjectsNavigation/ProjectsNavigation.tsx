import "./ProjectsNavigation.css"
import ProjectBtn from "../ProjectBtn/ProjectBtn";
import react from "../../assets/react.svg";
import minecraftLogo from "../../assets/minecraftLogo.png"
import python from "../../assets/python.png"
import cppLogo from "../../assets/cppLogo.svg"

function ProjectsNavigation(){
    return (
        <div className="ProjectsNavContainer">
            <ProjectBtn src={react} text="React" page="react-projects"/>
            <ProjectBtn src={minecraftLogo} text="Mods" page="minecraft-mods"/>
            <ProjectBtn src={python} text="Python" page="python-projects"/>
            <ProjectBtn src={cppLogo} text="C++" page="cpp-projects"/>
        </div>
    );
}

export default ProjectsNavigation;