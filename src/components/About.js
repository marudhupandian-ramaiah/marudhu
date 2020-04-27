import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        Hi, I'm<strong> Marudhupandian Ramaiah</strong>. I am a
                        software developer with full stack skill set. Have
                        involved in different software life cycles for almost 9
                        years.
                      </p>
                      <p>
                        Worked for domains like Finance, Telecommunication,
                        Multimedia and Healthcare. Played different roles such
                        as IC, Lead, Developer and etc. Always looking to learn
                        new things and apply wherever possible. Passionate
                        towards technology.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="services color-1">
                      <span className="icon2">
                        <i className="icon-google"></i>
                      </span>
                      <h3>Software Analysis</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="services color-2">
                      <span className="icon2">
                        <i className="icon-device-desktop"></i>
                      </span>
                      <h3>Software Design</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="services color-3">
                      <span className="icon2">
                        <i className="icon-data"></i>
                      </span>
                      <h3>Software Development</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="services color-4">
                      <span className="icon2">
                        <i className="icon-support"></i>
                      </span>
                      <h3>Software Maintenance</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
