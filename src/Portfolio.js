import React from 'react';
import './Portfolio.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";
import About from './Image/Aboutpic.jpg';
import img1 from './Image/img1.jpg';
import img2 from './Image/img2.jpg';
import img3 from './Image/img3.jpg';
import img4 from './Image/img4.jpg';
import img5 from './Image/img5.jpg';
import img6 from './Image/img6.jpg';

const Portfolio=()=> {
    return (
        <div>
            {/* <!-- Nav Bar --> */}
            <header class="header">
                <a href="#" class="logo">Portfolio</a>
                <i class="fa-solid fa-bars" id="menu-icon"></i>
                <nav class="navbar">
                    <a href="#home" class="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#service">Service</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            {/* <!-- Home Section --> */}
            <section class="home" id="home">
                <div class="home-content">
                    <h3>Hi, Myself</h3>
                    <h1>Kalaimadhe S</h1>
                    <h3>And I'm a <span class="multiple-text">Fullstack Developer </span></h3>
                    <p>As a Python Full Stack Developer fresher, proficient in developing robust web applications using frameworks like MYSQL, MongoDB  <br/>
                       and Flask, complemented by expertise in front-end technologies such as HTML, CSS, JavaScript and ReactJS. Passionate about <br/>
                       delivering high-quality, scalable software solutions and adept at both back-end and front-end development.</p>
                    <div class="social-media">
                        <a href="https://www.linkedin.com/in/kalaimadhe-s-088b90288/"><FaLinkedin/></a>
                        <a href="https://github.com/Kalaimadhe"><FaGithub/></a>
                        <a href="https://email.com/"><BiLogoGmail/></a>
                        <a href="https://www.facebook.com/"><FaFacebook /></a>
                    </div>
                    <a href="https://silver-ebonee-36.tiiny.site/" class="btn">Download CV</a>
                </div>
            </section>

            {/* <!-- About Section --> */}
            <section class="about" id="about">
                <div class="about-img">
                    <img src={About}alt="About" />
                </div>
                <div class="about-content">
                    <h2 class="heading">About <span>Me</span></h2>
                    <h3><span>Python</span> Fullstack Developer</h3>
                    <p>As a Python Full Stack Developer fresher, proficient in Python, MYSQL, MongoDB and Flask for roubust 
                       back-end development, with expertise <br/> in front-end technologies like HTML, CSS, JavaScript and 
                       Bootstrap. Additionally, well-versed in creating dynamic user interfaces using <br/>ReactJS, showing a comprehensive
                       skill set for end-to-end web <br/> application development.</p>
                    <a href="" class="btn">Read more</a>
                </div>
            </section>

            {/* <!-- About Section --> */}
            <section class="service" id="service">
                <h2 class="heading">My <span>Services</span></h2>
                <div class="service-container">
                    <div class="service-box">
                        <i class="fa-solid fa-code"></i>
                        <h3>Frontend Development</h3>
                        <p>Front-end development focuses on creating the visual and interactive aspects of websites using HTML, <br/>CSS, JavaScript and ReactJS. It involves ensuring a responsive, user-friendly experience across various devices and browsers.</p>
                        <a href="#" class="btn">Read more</a>
                    </div>
                    <div class="service-box">
                        <i class="fa-solid fas fa-palette"></i>
                        <h3>Backend Development</h3>
                        <p>Back-end development involves creating the server-side logic, databases, and APIs that power web applications. It ensures data <br/>processing, storage, and communication between the server and user interface.</p>
                        <a href="#" class="btn">Read more</a>
                    </div>
                    <div class="service-box">
                        <i class="fa-solid fab fa-android"></i>
                        <h3>Fullstack Development</h3>
                        <p>Python full stack development builds both the front-end and back-end of web applications using Python, MYSQL, MongoDB and Flask. It involves creating user interfaces, server-side logic, and integrating databases and APIs.</p>
                        <a href="#" class="btn">Read more</a>
                    </div>
                </div>
            </section>

            {/* <!-- Service Section --> */}
            <section class="portfolio" id="portfolio">
                <h2 class="heading">Latest <span>Project</span></h2>
                <div class="portfolio-container">
                    <div class="portfolio-box">
                        <img src={img1} />
                        <div class="portfolio-layer">
                            <h4>Instagram</h4>
                            <p>Instagram clone page using HTML / CSS</p>
                            <a href='https://github.com/Kalaimadhe/Kalai'><FaArrowUpRightFromSquare /></a>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <img src={img2}/>
                        <div class="portfolio-layer">
                            <h4>Nexcent</h4>
                            <p>Nexcent Figma replication using ReactJS</p>
                            <a href='https://github.com/Kalaimadhe/react'><FaArrowUpRightFromSquare /></a>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <img src={img3}/>
                        <div class="portfolio-layer">
                            <h4>Snack Squad</h4>
                            <p>Snack Squad: A Customizable Snack Ordering and Delivery App using Kotlin</p>
                            <a href='https://github.com/Kalaimadhe/Snack-Squad-A-Customizable-snack-ordering-and-delivery-app'><FaArrowUpRightFromSquare /></a>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <img src={img4}/>
                        <div class="portfolio-layer">
                            <h4>Foodman</h4>
                            <p>Foodman Figma Replication using HTML, CSS and JavaScript</p>
                            <a href='https://github.com/Kalaimadhe/FoodMan'><FaArrowUpRightFromSquare /></a>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <img src={img5} />
                        <div class="portfolio-layer">
                            <h4>Portfolio</h4>
                            <p>Portfolio using ReactJS</p>
                            <a href=''><FaArrowUpRightFromSquare /></a>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <img src={img6} />
                        <div class="portfolio-layer">
                            <h4>Famita</h4>
                            <p>Famita Figma Replication using HTML and CSS</p>
                            <a href='https://github.com/Kalaimadhe/famita'><FaArrowUpRightFromSquare /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Contact Section --> */}
            <section class="contact" id="contact">
                <h1 class="heading"> Contact <span>Me</span></h1>
                <form action="#">
                    <div class="input-box">
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="email" placeholder="Enter Your email" />
                    </div>
                    <div class="input-box">
                        <input type="number" placeholder="Phone Number" />
                        <input type="text" placeholder="Email Subject" />
                    </div>
                    <textarea name="" id="" cols="20" rows="10" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message" class="btn" />
                </form>
            </section>

            {/* <!-- Footer Section --> */}
            <footer class="footer">
                <div class="footer-text">
                    <p>Copyright &copy; 2024 by @Kalaimadhe | All Rights Reserved.</p>
                </div>
                <div class="footer-iconTop">
                    <a href="#home"><MdKeyboardArrowUp /></a>
                </div>
            </footer>
        </div>
    );
}
export default Portfolio;