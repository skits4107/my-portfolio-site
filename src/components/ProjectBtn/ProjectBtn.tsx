import "./ProjectBtn.css"

type ProjectBtnProps = {
    src:string,
    text:string
}

function ProjectBtn({src, text}: ProjectBtnProps){
    return (
        <div className="ProjectBtn">
            <img src={src} className="ProjectBtnImg"></img>
            <h5 className="ProjectBtnText">{text}</h5>
        </div>
    );
}

export default ProjectBtn;