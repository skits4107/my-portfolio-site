import "./ProjectBtn.css"
import { useNavigate } from 'react-router-dom';

type ProjectBtnProps = {
    src:string,
    text:string,
    page:string
}

function ProjectBtn({src, text, page}: ProjectBtnProps){

    const navigate = useNavigate();

    const changePage = () => {
        navigate('/'+page); // Navigate to /dashboard
    };

    return (
        <div className="ProjectBtn" onClick={changePage}>
            <img src={src} className="ProjectBtnImg"></img>
            <h5 className="ProjectBtnText">{text}</h5>
        </div>
    );
}

export default ProjectBtn;