import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, } from "react-icons/fa";


const Footer = () => {
    return (
        <section id="footer">
            <div className="footer container">
                <div className="brand">
                    <h1><span>U</span>med <span>S</span>ingh <span>R</span>athore</h1>
                </div>
                <h2>Your Complete Web Solution</h2>
                <div className="social-icon">
                    <a className='iconsw' href="https://wa.me/message/MBSCFQBCVZNFE1" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                    <a className='iconsi' href="https://www.instagram.com/umedsinghrathore_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a className='iconsl' href="http://www.linkedin.com/in/umed-singh-rathore-707076170/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a className='icons' href="https://mail.google.com/mail/?view=cm&fs=1&to=umedsinghrathore98@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope />
                    </a>

                </div>

                <p>Copyright © 2025 <span style={{ fontWeight: "bold" }}>Umed Singh Rathore</span>. All rights reserved</p>
            </div>
        </section>
    );
};

export default Footer;
