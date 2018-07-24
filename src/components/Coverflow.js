import React from 'react';
import ReactDOM from 'react-dom';
import { EssentialOils } from '../essentialOils';

class Cards extends React.Component {
  render() {
    const oilsData = EssentialOils();
    return (
      <section>
      {
        oilsData.map((card, i) => {
          return (
            <div className="card" id="card" style={this.props.cardStyle} key={i}>
              <p className="title">{card.name}</p>
              <p className="desc">{card.desc}</p>
              <a href="#"><img src={card.url} height='200' /></a>
            </div>
          )
        })
      }
      </section>
    )
  }
}

class Display extends React.Component {
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
    let boxWidth = document.getElementById("card").clientWidth;
    this.setState({ width: boxWidth });
  }
  
  // func: click the slider buttons
  handleClick(type) {
    // get the card's margin-right
    let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
    margin = JSON.parse(margin.replace(/px/i, '')); 

    const cardWidth = this.state.width; // the card's width
    const cardMargin = margin; // the card's margin
    const cardNumber = EssentialOils().length; // the number of cards
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
    return (
      <div className="cards-slider">
        <div className="slider-btns">
          <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
          <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
        </div>
        <Cards cardStyle={this.state.cardStyle} />
      </div>
    )
  }
}


export default Display;