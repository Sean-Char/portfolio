import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class Nav extends Component {

    render() {
        return (
          <div className="navbar-fixed">
            <nav className="transparent z-depth-0">
              <div className="nav-wrapper">
                <div className="container">
                  <Link to="/"><div className="brand-logo">SC</div></Link>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/professional">PROFESSIONAL</Link></li>
                    <li><Link to="/experience">EXPERIENCE</Link></li>
                    <li><Link to="/portfolio">PORTFOLIO</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        );
    }
}
