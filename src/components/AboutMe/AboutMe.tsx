
import PhotoOfme from "../../assets/PhotoOfMe.jpg"
import "./AboutMe.css"
function AboutMe(){


    return (
        <div className="AboutContainer">
            <img src={PhotoOfme} className="ProfilePhoto"/>
            <span>
                <h3 className="nameHeader">Aaron Weinberger</h3>
                <p className="aboutText">
                    I am a versitile freelance software developer who can make anything <br></br>
                    from minecraft mods to react website pages. I am able to do so much thanks to <br></br>
                    my many years teaching kids how to code at The Coder School. <br></br>
                </p>
            </span>
        </div>
    );
}

export default AboutMe;