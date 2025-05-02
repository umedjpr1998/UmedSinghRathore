import React from 'react';
// import '../css files/contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact container">
                <div>
                    <h1 className="section-title">Contact <span>info</span></h1>
                </div>
                <div className="contact-items">
                    <div className="contact-item">
                        <div className="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="phone icon" />
                        </div>
                        <div className="contact-info">
                            <h1>Phone</h1>
                            <h2>+91 9521481193</h2>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="email icon" />
                        </div>
                        <div className="contact-info">
                            <h1>Email</h1>
                            <h2>umedsinghrathore98@gmail.com</h2>
                            <h2>bittu1998r1@gmail.com</h2>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="map icon" />
                        </div>
                        <div className="contact-info">
                            <h1>Address</h1>
                            <h2>Jaipur, Rajasthan, India</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
