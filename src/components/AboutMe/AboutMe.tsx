
import PhotoOfme from "../../assets/PhotoOfMe.jpg"
import "./AboutMe.css"
function AboutMe(){


    return (
        <div className="AboutContainer">
            <img src={PhotoOfme} className="ProfilePhoto"/>
            <span>
                <h3 className="nameHeader">Aaron Weinberger</h3>
                <p className="aboutText">
                    I am a devleoper building all kinds tools, languages, and apps.<br></br>
                    Projects I have done include everything from minecraft modding to <br></br>
                    custom programming langauges to react apps. I am able to do so much thanks <br></br>
                    to my many years teaching kids coding skills. <br></br>
                </p>
            </span>
        </div>
    );
}

export default AboutMe;