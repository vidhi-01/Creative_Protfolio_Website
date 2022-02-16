import React from "react";
import home1 from "../img/home1.jpg";

const AboutSection = () => {
    return(
        <div>
        <div className="description">
            <div className="title">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>Your <span>dreams</span> come</h2>
                </div>
                <div className="hide">
                    <h2>true.</h2>
                </div>
            </div>
            <p>Computer science is the study of computers and computing as well as their theoretical and practical applications. Computer science applies the principles of mathematics, engineering, and logic to a plethora of functions, including algorithm formulation, software and hardware development, and artificial intelligence.</p>
            <button>Contact US</button>
        </div>
        <div className="image">
            <img src={home1} alt="Computer Science & Engineering." />
        </div>
    </div>
    );
};

export default AboutSection;