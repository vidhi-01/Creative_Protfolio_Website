import React from "react";
import home1 from "../img/home1.jpg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../style";

const AboutSection = () => {
    return(
        <About>
        <Description>
            <div className="title">
                <Hide>
                    <h2>We work to make</h2>
                </Hide>
                <Hide>
                    <h2>Your <span>dreams</span> come</h2>
                </Hide>
                <Hide>
                    <h2>true.</h2>
                </Hide>
            </div>
            <p>Computer science is the study of computers and computing as well as their theoretical and practical applications. Computer science applies the principles of mathematics, engineering, and logic to a plethora of functions, including algorithm formulation, software and hardware development, and artificial intelligence.</p>
            <button>Contact US</button>
        </Description>
        <Image>
            <img src={home1} alt="Computer Science & Engineering." />
        </Image>
    </About>
    );
};


export default AboutSection;