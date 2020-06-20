import React, {Component} from 'react'

export default class About extends Component {
    render () {
        return (
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                        <div className="col-md-12">
                        <div className="about-desc">
                            <span className="heading-meta">About Us</span>
                            <h2 className="colorlib-heading">Who Am I?</h2>
                            <p><strong>Hi I'm Apeksha Barhanpur, </strong> enthusiastic Software Engineer with 6 years of experience in 
                            strategic problem solving, building robust client applications using microservices architecture, 
                            object oriented development with RESTful services and cloud platform using CICD practices in 
                            scaled agile development framework.</p>
                            <p>I am a AnitaB.org Chicago Chapter Co-leader and love to connect, inspire and support other 
                                women to build their carrier in technology.</p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div className="hire">
                            <h2>I am happy to know you <br />that 300+ projects done sucessfully!</h2>
                            <a href="#" className="btn-hire">Hire me</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}