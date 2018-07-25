import React from 'react';
import ReactDOM from 'react-dom';
import { EssentialOils } from '../essentialOils';
import App from './App'

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  handleBaseOilClick(e) {
    e.preventDefault();
    // let oilList = EssentialOils();
    // let baseOilList = oilList.filter((oil) =>{
    //   oil.level = 'base'
    // })
    this.setState({ 
        baseLevel: e.currentTarget.dataset.name

    }, function () {
    console.log(this.state.baseLevel);
})
}

handleMidOilClick(e) {
    // e.preventDefault();
    this.setState({ 
      midLevel: e.currentTarget.dataset.name
  }, function () {
  console.log(this.state.midLevel);
})
}

handleTopOilClick(e) {
    // e.preventDefault();
    this.setState({ 
      topLevel: e.currentTarget.dataset.name
  }, function () {
  console.log(this.state.topLevel);
})
}

  render(props) {
    const { baseLevel, currentLevel, mood } = this.props;
    // let currentLevel = JSON.stringify(this.props.currentLevel);
    let currentMood = this.props.mood
    let oilsArray = this.props.baseLevel;
        // if (this.props.currentLevel === "top") {
        //   oilsArray = this.props.topLevel; 
        // } else if (this.props.currentLevel === "mid") {
        //   oilsArray = this.props.midLevel;
        // } else if (this.props.currentLevel === "base") {
        //   oilsArray = this.props.baseLevel;
        // }
        // console.log(oilsArray);
      return (
        <section>
        {
          oilsArray.map((card, i) => {
            return (
              <div className="card" id="card" data-name={card.name} style={this.props.cardStyle} onClick={this.handleBaseOilClick.bind(this)}key={i}>
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
    // let boxWidth = document.getElementById("card").clientWidth;
    this.setState({ width: 200 });
  
}
  // func: click the slider buttons
  handleClick(type) {
    // get the card's margin-right
    let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
    margin = JSON.parse(margin.replace(/px/i, '')); 
    let oilsArray = this.props.baseLevel;
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
    if (this.props.currentLevel === null) {
      return <div></div>;
    } else {
    return (
      <div className="cards-slider">
        <div className="slider-btns">
          <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
          <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
        </div>
        <Cards cardStyle={this.state.cardStyle} baseLevel={this.props.baseLevel} currentLevel={this.props.currentLevel} />
      </div>
    )
  }
}
}

export default Display;