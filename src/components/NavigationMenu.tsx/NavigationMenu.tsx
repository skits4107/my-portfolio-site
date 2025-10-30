
import "./NavigationMenu.css"

function NavigationMenu(){

    return (
        <div className="NavContainer">
            <ol className="NavList">
                <li className="NavItem">
                    <button className="NavBtn" key="homeBtn">Home</button>
                </li>
                <li>
                    <button className="NavBtn" key="aboutBtn">About</button>
                </li>
                <li>
                    <button className="NavBtn" key="projectsBtn">Projects</button>
                </li>
            </ol>
        </div>
    );
}

export default NavigationMenu;