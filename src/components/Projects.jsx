import React from 'react';
import pro1 from '../assets/img/project1.png';
import pro2 from '../assets/img/project2.png';
import pro3 from '../assets/img/project3.png';

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            subtitle: 'Umed Info Tech',
            link: 'https://umedinfotech.netlify.app/',
            description: 'An e-commerce mini platform with Home, About Us, Products, Contact Us, FAQ, Signup and Login pages.',
            image: pro1,

        },
        {
            title: 'Project 2',
            subtitle: 'Daily Mart',
            link: 'https://github.com/umedjpr1998/DailyMart.git',
            description: 'A modern e-commerce platform with product listing, shopping cart, and checkout features.',
            image: pro2,

        },
        {
            title: 'Project 3',
            subtitle: 'Chopal',
            link: 'https://chopal.netlify.app/',
            description: 'A mini social media webpage.',
            image: pro3,

        }
    ];


    return (
        <section id="projects">
            <div className="projects container">
                <div className="projects-header">
                    <h1 className="section-title">Recent <span>Projects</span></h1>
                </div>
                <div className="all-projects">
                    {projects.map((project, index) => (
                        <div className="project-item" key={index}>
                            <div className="project-info">
                                <h1>{project.title}</h1>
                                <h2>{project.subtitle}</h2>
                                <p>{project.description}</p>

                                {/* 🔗 Add this link section */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    style={{ color: '#1e90ff', textDecoration: 'none', marginTop: '10px', display: 'inline-block', fontSize: 15 }}
                                >
                                    🔗 Visit Website
                                </a>
                            </div>
                            <div className="project-img">
                                <img src={project.image} alt={project.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
