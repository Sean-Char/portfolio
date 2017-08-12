import React,{Component} from 'react';
import './Portfolio.css'
import img4 from '../img/img4.jpg'
import img7 from '../img/img7.jpeg'
import img6 from '../img/img6.jpeg'

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
                      <div className="card hoverable">
                        <div className="card-image">
                          <img className="responsive-img" src={img6} />
                          <span className="card-title">WorkOut</span>
                          <a  href="https://sean-char.github.io/workoutApp" className="btn-floating halfway-fab waves-effect waves-light pulse blue"><i className="material-icons">navigate_next</i></a>
                        </div>
                        <div className="card-content card_text">
                          <p>It allows users to select a muscle group and display workouts related to the muscle chosen.</p>
                        </div>
                      </div>
                    </div>

                    <div className="col s12 l4">
                      <div className="card hoverable">
                        <div className="card-image">
                          <img className="responsive-img" src={img7} />
                          <span className="card-title">Hairbook</span>
                          <a href="http://hair-app-project.herokuapp.com" className="btn-floating halfway-fab waves-effect waves-light pulse blue"><i className="material-icons">navigate_next</i></a>
                        </div>
                        <div className="card-content card_text">
                          <p>It allows hairdresser to input sales and track it by month, weekly, etc.</p>
                        </div>
                      </div>
                    </div>

                    <div className="col s12 l4">
                      <div className="card hoverable">
                        <div className="card-image">
                          <img className="responsive-img" src={img4} />
                          <span className="card-title">Travel Funds</span>
                          <a href="https://travelfunds.herokuapp.com" className="btn-floating halfway-fab waves-effect waves-light pulse blue"><i className="material-icons">navigate_next</i></a>
                        </div>
                        <div className="card-content card_text">
                          <p>Produced app to target older demographic in assisting them to easily pick travel packages corresponding with their savings or goals.</p>
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
