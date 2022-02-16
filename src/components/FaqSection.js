import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";

const FaqSection = () => {
    return(
        <div className="faq">
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, facilis!</p>
                </div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, facilis!</p>
                </div>
            </div>
            <div className="question">
                <h4>Different Projects</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, facilis!</p>
                </div>
            </div>
            <div className="question">
                <h4>Different Courses</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, facilis!</p>
                </div>
            </div>
        </div>
    )
}

export default FaqSection;