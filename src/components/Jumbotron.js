import React, { Component } from 'react';


class Jumbotron extends Component {

    render(props) {
        return(
        <div>
            <div className="container-fluid msg-container">
              <div className="headline">
                <h4>your oils. our recipes.</h4>  
                <h6>what's your vibe today?</h6>
                <div className="row flex-row justify-content-center buttons">
                  <a href="#" onClick={this.props.handleMoodClick} className="transparent_btn" data-toggle="modal" data-target="#at-signup" data-mood="calm">CALM</a>
                  <a href="#" onClick={this.props.handleMoodClick} className="transparent_btn" data-toggle="modal" data-target="#at-signup" data-mood="awaken">AWAKEN</a>
                  <a href="#" onClick={this.props.handleMoodClick} className="transparent_btn" data-toggle="modal" data-target="#at-signup" data-mood="sensual">SENSUAL</a>
                </div>
                <img className="arrow" src="./img/down-arrow.png" width="40"/>
              </div>
              <div className="row flex-row justify-content-center info">
                <div className="main-col">
                  <img src='./img/click.png' height="40" />
                  <span className='info-header'>Choose</span>
                  <span className="info-blurb">Whatever mood or needs you're feeling today, just choose it. Use the descriptions of each oil to guide you.</span>
                </div>
                <div className="main-col">
                  <img src='./img/fingerprint.png' height="40" />
                  <span className='info-header'>Create</span>
                  <span className="info-blurb">Once you've chosen a direction and your oils, we will create a blend that is as unique as you are.</span>
                </div>
                <div className="main-col">
                  <img src='./img/love.png' height="40" />
                  <span className='info-header'>Enjoy</span>
                  <span className="info-blurb">After you've mixed your oils, grab your crystals, and enjoy your unique blend. Namaste!</span>
                </div>
              </div>    
            </div>
        </div>
        )
}
}
export default Jumbotron;