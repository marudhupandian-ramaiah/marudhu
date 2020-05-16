import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-education" data-section="education">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Education</span>
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="fancy-collapse-panel">
                  <div
                    className="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="headingThree"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Bachelor of Technology in Information Technology
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseThree"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          <p>
                            Completed B.Tech(IT) from Mepco Schlenk Engineering
                            College during 2007-11 with an aggregate of 72%.
                            Received best project award in final year.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="headingFour"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Higher Secondary Education in Biology
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseFour"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingFour"
                      >
                        <div className="panel-body">
                          <p>
                            Completed HSC from Kamak Higher Secondary School
                            with an aggregate of 90% during 2006-07.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="headingFive"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Secondary School Leaving Certificate
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseFive"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingFive"
                      >
                        <div className="panel-body">
                          <p>
                            Completed SSLC from Kamak Higher Secondary School
                            with an aggregate of 90% during 2004-05.
                          </p>
                        </div>
                      </div>
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

export default Education;
