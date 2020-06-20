import React, {Component} from 'react'

export default class Home extends Component {
    render () {
        return (
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                <ul className="slides">
                    <li style={{backgroundImage: 'url(images/blog-3.jpg)'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner js-fullheight">
                            <div className="desc">
                                <h1>Hello! <br />I'm Apeksha </h1>
                                <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/14Q5wyP37iN9GrPH2_3QBhpmczwWAAiF7/view?usp=sharing" target="_blank"> View My Resume <i className="icon-download4" /></a></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>
                    <li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner">
                            <div className="desc">
                                <h1>I love <br />building technology</h1>
                                <p><a className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3" /></a></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
            </section>
        )
    }
}