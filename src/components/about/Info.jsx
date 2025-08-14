import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">

            <div className="about__box">
                <h3 className="about__title">Experience <i className="uil uil-award about__icon"></i></h3>
                <p className="about__subtitle">5 Years</p>
                <span className="about__subtitle">Software Engineer</span>
            </div>

            <div className="about__box">
                <h3 className="about__title">Education <i className="uil uil-graduation-cap about__icon"></i></h3>
                <p className="about__subtitle">Masters in Computer Science </p>
                <span className="about__subtitle">Bachelor in Computer Science </span>
            </div>
            
        </div>

        
    )
}

export default Info;