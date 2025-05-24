import React from 'react';
import pro1 from '../assets/img/project1.png';
import pro2 from '../assets/img/project2.png';
import pro3 from '../assets/img/project3.png';

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            subtitle: 'Umed Info Tech',
            description: 'A modern e-commerce platform with product listing, Contact us Throw email and Login And Signup.',
            image: pro1,
        },
        {
            title: 'Project 2',
            subtitle: 'Daily Mart',
            description: 'A modern e-commerce platform with product listing, shopping cart, and checkout features.',
            image: pro2,
        },
        {
            title: 'Project 3',
            subtitle: 'Tomato',
            description: 'A productivity app to create, manage, and track daily tasks with user-friendly UI.',
            image: pro3,
        },
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
