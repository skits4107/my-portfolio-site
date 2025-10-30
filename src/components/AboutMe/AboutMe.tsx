
import PhotoOfme from "../../assets/PhotoOfMe.jpg"
import "./AboutMe.css"
function AboutMe(){


    return (
        <div className="AboutCard">
            <img src={PhotoOfme} className="ProfilePhoto"/>
            <p className="aboutText">
                I am a versitile freelance software developer who can make anything <br></br>
                from minecraft mods to react website pages. I am able to do so much thanks to <br></br>
                my many years teaching kids how to code at The Coder School. <br></br>
            </p>
        </div>
    );
}

export default AboutMe;