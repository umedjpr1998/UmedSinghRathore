import React, { useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";


const Home = () => {
    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        const mobile_menu = document.querySelector('.nav-list ul');
        const menu_items = document.querySelectorAll('.nav-list ul li a');
        const header = document.querySelector('.header.container');

        const toggleMenu = () => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        };

        const closeMenu = () => {
            hamburger.classList.remove('active');
            mobile_menu.classList.remove('active');
        };

        const handleScroll = () => {
            const scroll_position = window.scrollY;
            header.style.backgroundColor = scroll_position > 250 ? '#29323c' : 'transparent';
        };

        hamburger.addEventListener('click', toggleMenu);
        menu_items.forEach((item) => item.addEventListener('click', closeMenu));
        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            hamburger.removeEventListener('click', toggleMenu);
            menu_items.forEach((item) => item.removeEventListener('click', closeMenu));
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Header */}
            <section id="header">
                <div className="header container">
                    <div className="nav-bar">
                        <div className="brand">
                            <a href="#hero">
                                <h1><span>U</span>med <span>S</span>ingh <span>R</span>athore</h1>
                            </a>
                        </div>
                        <div className="nav-list">
                            <div className="hamburger">
                                <div className="bar"></div>
                            </div>
                            <ul>
                                <li><a href="#hero" data-after="Home">Home</a></li>
                                <li><a href="#services" data-after="Service">Services</a></li>
                                <li><a href="#projects" data-after="Projects">Projects</a></li>
                                <li><a href="#about" data-after="About">About</a></li>
                                <li><a href="#contact" data-after="Contact">Contact</a></li>

                                {/* Social Icons */}
                                <li>
                                    <div style={{ display: 'flex', gap: "10px", marginLeft: "50px" }}>
                                        <a href="https://wa.me/message/MBSCFQBCVZNFE1" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', margin: 0, padding: 0, textDecoration: 'none', display: 'inline-block' }}> <FaWhatsapp /></a>

                                        <a href="https://www.instagram.com/umedsinghrathore_/" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', margin: 0, padding: 0, textDecoration: 'none', display: 'inline-block' }}> <FaInstagram /></a>

                                        <a href="http://www.linkedin.com/in/umed-singh-rathore-707076170/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5', margin: 0, padding: 0, textDecoration: 'none', display: 'inline-block' }}> <FaLinkedin /></a>

                                        <a href="mailto:umedsinghrathore98@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#D44638', margin: 0, padding: 0, textDecoration: 'none', display: 'inline-block', marginLeft: "3px" }}
                                        > <FaEnvelope /></a>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section id="hero">
                <div className="hero container">
                    <div>
                        <h1>Hello, <span></span></h1>
                        <h1>My Name is <span></span></h1>
                        <h1>Umed Singh Rathore<span></span></h1>
                        <a href="#projects" type="button" className="cta">Portfolio</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;