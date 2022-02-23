import React from "react";
import home1 from "../img/home1.jpg";
import { About, Description, Image, Hide } from "../style";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
    return(
        <About>
        <Description>
            <div className="title">
                <Hide>
                    <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>Your <span>dreams</span> come</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>true.</motion.h2>
                </Hide>
            </div>
            <motion.p variants={fade}>Computer science is the study of computers and computing as well as their theoretical and practical applications. Computer science applies the principles of mathematics, engineering, and logic to a plethora of functions, including algorithm formulation, software and hardware development, and artificial intelligence.</motion.p>
            <motion.button variants={fade}>Contact US</motion.button>
        </Description>
        <Image>
            <motion.img variants={photoAnim} src={home1} alt="Computer Science & Engineering." />
        </Image>
        <Wave />
    </About>
    );
};

export default AboutSection;