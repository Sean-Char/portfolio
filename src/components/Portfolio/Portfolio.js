import React,{Component} from 'react';
import './Portfolio.css'
class Portfolio extends Component {

    render() {
        return (
          <div className="responsive-img img3">
            <div className="container">
              <div className="row">
                <div className="col s12">
                  <div className="container right">
                    <div className="text_portfolio">
                      <h2>PORTFOLIO</h2>
                      <h6>MY LATEST WORK</h6>
                    </div>
                  </div>

                  <div className="card_wrap">
                    <div className="col s12 l4">
                      <div className="card-panel hoverable red lighten-2">
                        <div className="card-content white-text">
                          <span className="card-title">Work It</span>
                          <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                        <div className="card-action">
                          <a className="btn btn-floating pulse"><i className="material-icons">navigate_next</i></a>
                        </div>
                      </div>
                    </div>

                    <div className="col s12 l4">
                      <div className="card-panel hoverable red lighten-2">
                        <div className="card-content white-text">
                          <span className="card-title">Hairbook</span>
                          <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                        <div className="card-action">
                          <a className="btn btn-floating pulse"><i className="material-icons">navigate_next</i></a>
                        </div>
                      </div>
                    </div>

                    <div className="col s12 l4">
                      <div className="card-panel hoverable red lighten-2">
                        <div className="card-content white-text">
                          <span className="card-title">Travel Funds</span>
                          <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                        <div className="card-action">
                          <a className="btn btn-floating pulse"><i className="material-icons">navigate_next</i></a>
                        </div>
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

export default Portfolio;
