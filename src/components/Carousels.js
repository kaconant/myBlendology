import React, { Component } from "react";
import Cards from './Card.js'
class Carousels extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentCard: 0,
        position: 0,
        cardStyle: {
          transform: 'translateX(0px)'
        },
        width: 0,
      };
    }
  
    componentDidMount() {
      // let boxWidth = document.getElementById("card").clientWidth;
      this.setState({ width: 200 });
    
  }
    // func: click the slider buttons
    handleClick(type) {
      // get the card's margin-right
      let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
      margin = JSON.parse(margin.replace(/px/i, '')); 
      let oilsArray = this.props.currentLevel;
      const cardWidth = this.state.width; // the card's width
      const cardMargin = margin; // the card's margin
      const cardNumber = oilsArray.length; // the number of cards
      let currentCard = this.state.currentCard; // the index of the current card
      let position = this.state.position; // the position of the cards
  
      // slide cards
      if(type === 'next' && currentCard < cardNumber-1) {
        currentCard++;
        position -= (cardWidth+cardMargin);
      } else if(type === 'prev' && currentCard > 0) {
        currentCard--;
        position += (cardWidth+cardMargin);
      }
      this.setCard(currentCard, position);
    }
    
    setCard(currentCard, position) {
      this.setState({
        currentCard: currentCard,
        position: position,
        cardStyle: {
          transform: `translateX(${position}px)`
        }
      })
    }
  
    render() {
      var infoLabel = " "
      if (this.props.levelLabel === "base") {
        infoLabel = "Choose your base:"
      } else if (this.props.levelLabel === "middle") {
        infoLabel = "Choose your middle:"
      } else if (this.props.levelLabel === "top") {
        infoLabel = "Choose your top:"
      }
  
      if (this.props.currentLevel === null) {
        console.log('triggered')
        return ;
      } else {
        console.log('triggered2')
      return (
        <div className="cards-slider">
          <span>{infoLabel}</span>
          <div className="slider-btns">
            <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
            <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
          </div>
          <Cards cardStyle={this.state.cardStyle} currentLevel={this.props.currentLevel} />
        </div>
      )
    }
  }
}
  


export default Carousels;