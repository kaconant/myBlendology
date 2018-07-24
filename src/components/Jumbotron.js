import React, { Component } from 'react';


class Jumbotron extends Component {

    render() {
        return(
        <div>
            <div class="container-fluid msg-container">
              <div class="headline">
                <h4>your oils. our recipes.</h4>  
                <h6>what's your vibe today?</h6>
                <div class="row flex-row justify-content-center buttons">
                  <a href="#" class="transparent_btn" data-toggle="modal" data-target="#at-signup">CALM</a>
                  <a href="#" class="transparent_btn" data-toggle="modal" data-target="#at-signup">AWAKEN</a>
                  <a href="#" class="transparent_btn" data-toggle="modal" data-target="#at-signup">SENSUAL</a>
                </div>
                <img class="arrow" src="./img/down-arrow.png" width="40"/>
              </div>
              <div class="row flex-row justify-content-center info">
                <div class="main-col">
                  <img src='./img/click.png' height="40" />
                  <span class='info-header'>Choose</span>
                  <span class="info-blurb">Whatever mood or needs you're feeling today, just choose it. Use the descriptions of each oil to guide you.</span>
                </div>
                <div class="main-col">
                  <img src='./img/fingerprint.png' height="40" />
                  <span class='info-header'>Create</span>
                  <span class="info-blurb">Once you've chosen a direction and your oils, we will create a blend that is as unique as you are.</span>
                </div>
                <div class="main-col">
                  <img src='./img/love.png' height="40" />
                  <span class='info-header'>Enjoy</span>
                  <span class="info-blurb">After you've mixed your oils, grab your crystals, and enjoy your unique blend. Namaste!</span>
                </div>
              </div>    
            </div>
        </div>
        )
}
}
export default Jumbotron;