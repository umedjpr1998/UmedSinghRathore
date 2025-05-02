import React from 'react';
import Aboutimage from '../assets/img/selfimg.jpeg'
// import '../css files/about.css';

const About = () => {
    return (
        <section id="about">
            <div className="about container">
                <div className="col-left">
                    <div className="about-img">
                        <img src={Aboutimage} alt="About me" />
                    </div>
                </div>
                <div className="col-right">
                    <h1 className="section-title">About <span>me</span></h1>
                    <h2>MERN Stack Developer</h2>
                    <p>
                        I’m a passionate MERN Stack Developer with a strong focus on building dynamic, scalable, and responsive web
                        applications. I specialize in working with MongoDB, Express.js, React.js, and Node.js to create full-stack
                        solutions that solve real-world problems. From crafting sleek front-end interfaces to developing robust
                        back-end APIs, I bring ideas to life through clean code and modern development practices. I'm committed to
                        continuous learning and delivering high-quality digital experiences.
                    </p>
                    <a href="/resume.pdf" download className="cta">Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default About;
