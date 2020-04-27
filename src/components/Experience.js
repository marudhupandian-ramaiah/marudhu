import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">
                  Work Experience
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2"></i>
                      </div>

                      <div className="timeline-label">
                        <h2>
                          <a href="#">
                            Senior Associate at <b>Cognizant</b>
                          </a>{" "}
                          <span>Jan 2018 - May 2020</span>
                        </h2>
                        <p>
                          Worked as an individual contributor for Disney and
                          HCSC, USA.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">
                            Associate Consultant at <b>GlobalLogic</b>
                          </a>{" "}
                          <span>Nov 2016 - Jan 2018</span>
                        </h2>
                        <p>
                          Worked for notification center project of Ericsson,
                          Chennai.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">
                            Technical Lead at <b>BNY Mellon Technology</b>
                          </a>{" "}
                          <span>Jun 2011 - Nov 2016</span>
                        </h2>
                        <p>
                          Took part in handling market data for Pershing
                          products.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Experience;
