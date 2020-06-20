import React, {Component} from 'react'

export default class Experience extends Component {
    render () {
        return (
            <section className="colorlib-experience" data-section="experience">
                <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Experience</span>
                    <h2 className="colorlib-heading animate-box">Work Experience</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="timeline-centered">
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                            <div className="timeline-icon color-1">
                            <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                            <h2><a href="#">Software Engineer at CCC Information Services, Chicago</a> <span>2019-Present</span></h2>
                            <ul>
                                <li>Codes/Design software applications using Java (Spring framework), J2EE, HTML, CSS, Vue.js</li>
                                <li>Design and build high quality software products for Auto Insurance claim processing industry.</li>
                                <li>Develop detailed technical analysis and design specifications based on functional and business requirements.</li>
                                <li>Participate in creating and executing the product in integration environment and prepare the test plans and scenarios.</li>
                                <li>Research and share technical solutions to any business problems.</li>
                            </ul>
                            </div>
                        </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                        <div className="timeline-entry-inner">
                            <div className="timeline-icon color-2">
                            <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                            <h2><a href="#">Software Engineer at Cognizant Technology Solutions, Chicago</a> <span>2015-2019</span></h2>
                            <ul>
                                <li>Performed detailed technical analysis and design specifications based on functional requirements and research technical solutions to business problems.</li>
                                <li>Participated in functional requirements gathering that involved a review of existing systems configurations, operating methodologies and business needs to help make applications scalable and modular.</li>
                                <li>Developed, automated and maintained client applications using CICD architecture to build light weight and enhanced microservices using spring boot framework.</li>
                                <li>Performed extensive analysis and implementation in migrating applications from native WebSphere to PCF Cloud using Jenkins pipeline delivery.</li>
                                <li>Involved in rapid prototyping activities which includes design/ coding/ testing to existing architecture using technologies as Netflix Eureka service registry and Zuul router.</li>
                                <li>Worked closely with ethical hacking team to implement the corrective measures and resolve security vulnerabilities based on recommendations from penetration testing.</li>
                            </ul>
                            </div>
                        </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div className="timeline-entry-inner">
                            <div className="timeline-icon color-3">
                            <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                            <h2><a href="#">Web Developer at Authentic Intelligence, Corona, California</a> <span>2015</span></h2>
                            <ul>
                                <li>Developed web application using Asp.net MVC 5 architecture to build a Cyber security software product for HealthCare industry.</li>
                                <li>Involved in integrating a web based application using PHP, JavaScript, CSS and Bootstrap technologies.</li>
                            </ul>
                            </div>
                        </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                        <div className="timeline-entry-inner">
                            <div className="timeline-icon color-4">
                            <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                            <h2><a href="#">Software Summer Intern at The Portal Group, Torrance, California</a> <span>2014</span></h2>
                            <ul>
                                <li>Enhanced the Request tracker (Ticketing System) with new features to keep track of live deployments, domain SSL services, apache VHOST services, Akamai cloud services, Firewall operations and application server issues.</li>
                                <li>Involved in identifying gaps within the design of request tracking system and design new modules that would provide the ability to communicate faster with the clients for any live issues.</li>
                                <li>Integrated modules to send emails to clients using PHP, MYSQL and open source frameworks for better understanding of the client issues and to enhance the performance for production support team.</li>
                            </ul>
                            </div>
                        </div>
                        </article>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}