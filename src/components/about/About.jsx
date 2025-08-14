import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";
import CV from "./../../assets/resume.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <p className="section__title">Find out more</p>
      <h2 className="section__subtitle">About me</h2>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />
          <p className="about__description">
          I'm Jayawanth Rayakota Harnath, a passionate Software Engineer, with a strong foundation in full-stack development and a keen interest in data science. My journey in technology has been driven by a desire to build scalable, data-driven applications that not only solve complex problems but also deliver meaningful value to users.
          Over the years, I've honed my skills in a variety of tools and technologies, including React.js, Angular, Spring Boot, Java, and Python. This diverse tech stack has enabled me to work across the entire software development lifecycle, from crafting intuitive user interfaces to optimizing backend performance.
          I thrive in fast-paced, Agile environments where collaboration and continuous learning are paramount. Whether it's developing user-friendly interfaces, enhancing backend efficiency, or leveraging machine learning to extract insights, I'm committed to using technology to create solutions that make a tangible impact.
          </p>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default About;
