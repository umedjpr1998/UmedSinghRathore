import React from 'react';
// import '../css files/services.css';

const Services = () => {
    return (
        <section id="services">
            <div className="services container">
                <div className="service-top">
                    <h1 className="section-title">Serv<span>i</span>ces</h1>
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>
                        I specialize in building fast, scalable web applications using the MERN stack.
                        From custom APIs to dynamic user interfaces, I deliver solutions that drive results
                        and meet modern business needs.!
                    </p>
                </div>
                <div className="service-bottom">
                    <div className="service-item">
                        <div className="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="services" />
                        </div>
                        <h2>🔧 Web App Development</h2>
                        <p>
                            I craft responsive, high-performance web apps using MongoDB, Express, React, and Node.js —
                            built to scale with your business.
                        </p>
                    </div>

                    <div className="service-item">
                        <div className="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="services" />
                        </div>
                        <h2>🔌 API & Backend Services</h2>
                        <p>
                            Secure, fast, and scalable REST or GraphQL APIs with Node.js and Express,
                            backed by MongoDB for real-time data access.
                        </p>
                    </div>

                    <div className="service-item">
                        <div className="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="services" />
                        </div>
                        <h2>💻 Admin Dashboards</h2>
                        <p>
                            Custom admin panels and dashboards with React for seamless data control,
                            analytics, and user management.<br></br><span style={{ display: "none" }}>.</span><br></br><span style={{ display: "none" }}>.</span>
                        </p>
                    </div>

                    <div className="service-item">
                        <div className="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="services" />
                        </div>
                        <h2>🛒 E-commerce Solutions</h2>
                        <p>
                            Feature-rich MERN-based online stores with cart, payment integration,
                            and real-time inventory tracking.<br></br><span style={{ display: "none" }}>.</span><br></br><span style={{ display: "none" }}>.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Services;
