import React,{Component} from 'react';
import './About.css';

class About extends Component {

    render() {
        return (
          <div className="responsive-img img2">
            <div className="container">
              <div className="row">
                <div className="col s12">

                    <div className="about_text center-align">
                      <h2>About</h2>
                    </div>

                    <div className="card-panel indigo darken-4 z-depth-5">
                      <div className="card-content white-text">
                        <h3 className="flow-text">Hey guys, I'm Sean! 👍</h3><p>Thanks for taking your time to look at my portfolio. I love to code and design. Out of my professional work life, I enjoy outdoors with my family. I love to bbq when ever I can with my firends and just talk about code or sports.</p>
                      </div>
                    </div>

                    <div className="col s12 l6">
                      <div className="card-panel teal z-depth-5">
                        <div className="card-content white-text">
                          <span className="card-title"><h5>CORE DISCIPLINES</h5></span>
                          <ul>
                            <li>AngularJs</li>
                            <li>ReactJs</li>
                            <li>NodeJs</li>
                            <li>PostgresSQL</li>
                            <li>JavaScript</li>
                            <li>RESTful API's</li>
                            <li>Bootstrap</li>
                            <li>Materialize</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col s12 l6">
                      <div className="card-panel teal z-depth-5">
                        <div className="card-content white-text">
                          <span className="card-title"><h5>CONTACT</h5></span>
                           <p>If you have questions, you can reach me directly at bxc150230@utdallas.edu or LinkedIn. Leave a message and I will get back to you as soon as possible</p>
                        </div>
                        <div className="card-action">
                          <a href="https://www.linkedin.com/in/sean-charoutanh
" className="btn btn-floating pink pulse">
                            <i className="material-icons">navigate_next</i></a>
                            <span className="white-text link_text">LinkedIn</span>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}


export default About;
