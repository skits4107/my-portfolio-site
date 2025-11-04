
import "./NavigationMenu.css"
import { useNavigate } from 'react-router-dom';

function NavigationMenu(){
    const navigate = useNavigate();

    const changePage = (page:string) => {
        navigate('/'+page); // Navigate to /dashboard
    };

    return (
        <div className="NavContainer">
            <ol className="NavList">
                <li className="NavItem">
                    <button className="NavBtn" key="homeBtn" onClick={()=>{changePage("")}}>Home</button>
                </li>
                <li>
                    <button className="NavBtn" key="aboutBtn" onClick={()=>{changePage("about")}}>About</button>
                </li>
                <li>
                    <button className="NavBtn" key="contactBtn" onClick={()=>{changePage("contact")}}>Contact</button>
                </li>
            </ol>
        </div>
    );
}

export default NavigationMenu;