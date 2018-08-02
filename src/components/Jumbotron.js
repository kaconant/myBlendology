import React, { Component } from 'react';

class Jumbotron extends Component {

    render() {
        return(
        <div>
            <div className="container-fluid msg-container">
              <div className="headline">
                <h4>our oils. your blends.</h4>  
                {/* <h6>what's your vibe today?</h6> */}
                {/* <div className="row flex-row justify-content-center buttons">
                  <a href="#base" onClick={this.props.handleMoodClick} className="transparent_btn"  data-target="#base" data-mood="calm">CALM</a>
                  <a href="#base" onClick={this.props.handleMoodClick} className="transparent_btn"  data-target="#base" data-mood="awaken">AWAKEN</a>
                  <a href="#base" onClick={this.props.handleMoodClick} className="transparent_btn"  data-target="#base" data-mood="sensual">SENSUAL</a>
                </div> */}
                <div className="row flex-row justify-content-center info">
                <div className="main-col">
                  <img src='./img/click2.png' height="40" />
                  <span className='info-header'>Choose</span>
                  <span className="info-blurb">Pick a mood and follow the descriptions of each oil to guide you.</span>
                </div>
                <div className="main-col">
                  <img src='./img/fingerprint2.png' height="40" />
                  <span className='info-header'>Create</span>
                  <span className="info-blurb">After your selection, we will provide you the exact measurements for your blend.</span>
                </div>
                <div className="main-col">
                  <img src='./img/love2.png' height="40" />
                  <span className='info-header'>Enjoy</span>
                  <span className="info-blurb">Sit back, relax, and enjoy a blend as unique as you are.</span>
                </div>
              </div>    
                {/* <img className="arrow" src="./img/down-arrow.png" width="40"/> */}
              </div>
              {/* <div className="row flex-row justify-content-center info">
                <div className="main-col">
                  <img src='./img/click2.png' height="40" />
                  <span className='info-header'>Choose</span>
                  <span className="info-blurb">Pick a mood and follow the descriptions of each oil to guide you.</span>
                </div>
                <div className="main-col">
                  <img src='./img/fingerprint2.png' height="40" />
                  <span className='info-header'>Create</span>
                  <span className="info-blurb">After your selection, we will provide you the exact measurements for your blend.</span>
                </div>
                <div className="main-col">
                  <img src='./img/love2.png' height="40" />
                  <span className='info-header'>Enjoy</span>
                  <span className="info-blurb">Sit back, relax, and enjoy a blend as unique as you are.</span>
                </div>
              </div>     */}

                              <h6>what's your vibe today?</h6>
                <div className="row flex-row justify-content-center buttons">
                  <a href="#base" onClick={this.props.handleMoodClick} className="transparent_btn"  data-target="#base" data-mood="calm">CALM</a>
                  <a href="#base" onClick={this.props.handleMoodClick} className="transparent_btn"  data-target="#base" data-mood="awaken">AWAKEN</a>
                  <a href="#base" onClick={this.props.handleMoodClick} className="transparent_btn"  data-target="#base" data-mood="sensual">SENSUAL</a>
                </div>
            </div>
        </div>
        )
}
}
export default Jumbotron;