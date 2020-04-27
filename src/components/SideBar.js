import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i></i>
        </nav>
        <aside
          id="colorlib-aside"
          role="complementary"
          className="border js-fullheight"
        >
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: "url(images/about.jpg)" }}
            ></div>
            <h1 id="colorlib-logo">
              <a href="index.html">Marudhupandian Ramaiah</a>
            </h1>
            <span className="position">
              <a href="#">Software Developer</a>
            </span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#" data-nav-section="home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="education">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="experience">
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div id="colorlib-main-menu">
            <ul>
              <li>
                <a
                  href="https://github.com/marudhupandian-ramaiah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/5881623/marudhupandian-ramaiah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-stackoverflow"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/marudhupandian-ramaiah-64804a48"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin2"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/marudhu89"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-twitter2"></i>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}

export default SideBar;
