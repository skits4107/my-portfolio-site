import "./ProjectsNavigation.css"
import ProjectBtn from "../ProjectBtn/ProjectBtn";
import react from "../../assets/react.svg";
import minecraftLogo from "../../assets/minecraftLogo.png"
import python from "../../assets/python.png"
import cppLogo from "../../assets/cppLogo.svg"

function ProjectsNavigation(){
    return (
        <div className="ProjectsNavContainer">
            <ProjectBtn src={react} text="React"/>
            <ProjectBtn src={minecraftLogo} text="Mods"/>
            <ProjectBtn src={python} text="Python"/>
            <ProjectBtn src={cppLogo} text="C++"/>
        </div>
    );
}

export default ProjectsNavigation;