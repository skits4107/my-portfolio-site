import AboutMe from "../components/AboutMe/AboutMe.tsx"
import NavigationMenu from "../components/NavigationMenu.tsx/NavigationMenu.tsx";
import ProjectsNavigation from "../components/ProjectsNavigation/ProjectsNavigation.tsx";

function HomePage(){
    return (
        <>
            <NavigationMenu />
            <AboutMe />
            <ProjectsNavigation />
        </>
    )
}

export default HomePage;