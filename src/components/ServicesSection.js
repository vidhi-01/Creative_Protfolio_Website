import React from "react";
import Coding from "../img/Coding.svg";
import database from "../img/database.svg";
import testing from "../img/testing.svg";
import App_dev from "../img/Appdev.svg";
import home2 from "../img/home2.jpg";

const ServicesSection = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img alt="icon" src={Coding}/>
                            <h3>Coding</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, quas.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon" src={database}/>
                            <h3>Database</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, quas.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon" src={testing}/>
                            <h3>Testing</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, quas.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon" src={App_dev}/>
                            <h3>App Developement</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, quas.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img alt="future" src={home2}/>
            </div>
        </div>
    )
}

export default ServicesSection;