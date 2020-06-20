import React, {Component} from 'react'

export default class Services extends Component {
    render () {
        return (
            <section className="colorlib-services" data-section="services">
                <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">What I do?</span>
                    <h2 className="colorlib-heading">Here are some of my expertise</h2>
                    </div>
                </div>
                <div className="row row-pt-md">
                    <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                        <span className="icon">
                        <i className="icon-bulb" />
                        </span>
                        <div className="desc">
                        <h3>Application Design</h3>
                        <p>Perform technical analysis and design application specifications based on business requirements.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                    <div className="services color-2">
                        <span className="icon">
                        <i className="icon-data" />
                        </span>
                        <div className="desc">
                        <h3>Software Development</h3>
                        <p> Build light weight applications using using CICD, microservice architecture 
                                    and Java framworks.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                    <div className="services color-3">
                        <span className="icon">
                        <i className="icon-globe-outline" />
                        </span>
                        <div className="desc">
                        <h3>Web Development</h3>
                        <p>Design and build user interactive applications using HTML5, React and Javascript frameworks.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                    <div className="services color-4">
                        <span className="icon">
                        <i className="icon-phone3" />
                        </span>
                        <div className="desc">
                        <h3>Mobile Development</h3>
                        <p>Build browser compatible HTML5 and Android native applications using Java and Vue.js
                            framework.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                        <span className="icon">
                        <i className="icon-display2" />
                        </span>
                        <div className="desc">
                        <h3>Data Visualization</h3>
                        <p>Help analytical decision makers by representing the data in pictorial format.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                    <div className="services color-6">
                        <span className="icon">
                        <i className="icon-cloud4" />
                        </span>
                        <div className="desc">
                        <h3>Data Science</h3>
                        <p>Capture, analyze and process the data using various algorithmic models.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}