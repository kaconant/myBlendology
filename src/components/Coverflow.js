import React from 'react';
import ReactDOM from 'react-dom';


function CardData() {
  const rtn = [{
      title: "Sage",
      desc: 'This sharp, herbal essential oil is great for relieving grief and quickening the senses, while stimulating the lymphatic system and helping with female problems, such as sterility and menopausal problems and on the skin it not only helps healing but also to reduce pore size.',
      url: "../sage.jpeg"
    }, {
      title: "Clary Sage",
      desc: 'This sweet, somewhat herbaceous oil has great benefits - not only for easing depression  and nervous burn-out, but for a host of female complaints and for relieving congested complexions.',
      url: "../clary-sage.jpg"
    }, {
      title: "Sandalwood",
      desc: 'This woody, exotic essential oil has wonderful qualities for relieving both chest and urinary tract infections, while assisting the skin in promoting hydration and moisture and for the mind it creates a calming and harmonizing effect, while reducing tension and confusion.',
      url: "../Sandalwood.jpg"
    },  {
      title: "Peppermint",
      desc: 'This cooling and refreshing essential oil is used in aromatherapy to stimulate the mind, increase mental agility and to increase focus, while cooling the skin, reducing redness and calming irritation and itchiness. It furthermore helps to ease spastic colon, migraine, headaches, sinus and chest congestion.',
      url: "../peppermint.jpg"
    },  {
      title: "Bergamot",
      desc: "This fresh smelling essential oil is great for creating a more relaxed and happy feeling, relieving urinary tract infections, boosting the liver, spleen and stomach, while fighting oily skin, acne, psoriasis, eczema, as well as cold sores.",
      url: "../bergamot.jpg"
    }, {
      title: "Sage",
      desc: 'This sharp, herbal essential oil is great for relieving grief and quickening the senses, while stimulating the lymphatic system and helping with female problems, such as sterility and menopausal problems and on the skin it not only helps healing but also to reduce pore size.',
      url: "../sage.jpeg"
    }, {
      title: "Clary Sage",
      desc: 'This sweet, somewhat herbaceous oil has great benefits - not only for easing depression  and nervous burn-out, but for a host of female complaints and for relieving congested complexions.',
      url: "../clary-sage.jpg"
    }, {
      title: "Sandalwood",
      desc: 'This woody, exotic essential oil has wonderful qualities for relieving both chest and urinary tract infections, while assisting the skin in promoting hydration and moisture and for the mind it creates a calming and harmonizing effect, while reducing tension and confusion.',
      url: "../Sandalwood.jpg"
    },  {
      title: "Peppermint",
      desc: 'This cooling and refreshing essential oil is used in aromatherapy to stimulate the mind, increase mental agility and to increase focus, while cooling the skin, reducing redness and calming irritation and itchiness. It furthermore helps to ease spastic colon, migraine, headaches, sinus and chest congestion.',
      url: "../peppermint.jpg"
    },  {
      title: "Bergamot",
      desc: "This fresh smelling essential oil is great for creating a more relaxed and happy feeling, relieving urinary tract infections, boosting the liver, spleen and stomach, while fighting oily skin, acne, psoriasis, eczema, as well as cold sores.",
      url: "../bergamot.jpg"
    }
    
  ]
  return rtn;
}

class Cards extends React.Component {
  render() {
    const cardData = CardData();
    return (
      <section>
      {
        cardData.map((card, i) => {
          return (
            <div className="card" id="card" style={this.props.cardStyle} key={i}>
              <p className="title">{card.title}</p>
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
    const cardNumber = CardData().length; // the number of cards
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