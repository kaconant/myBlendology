import React from 'react';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  handleBaseOilClick(e) {
    e.preventDefault();
    this.setState({ 
        baseLevel: e.currentTarget.dataset.name

    }, function () {
    console.log(this.state.baseLevel);
})
}

// handleMidOilClick(e) {
//     // e.preventDefault();
//     this.setState({ 
//       midLevel: e.currentTarget.dataset.name
//   }, function () {
//   console.log(this.state.midLevel);
// })
// }

// handleTopOilClick(e) {
//     // e.preventDefault();
//     this.setState({ 
//       topLevel: e.currentTarget.dataset.name
//   }, function () {
//   console.log(this.state.topLevel);
// })
// }

  render() {
    let oilsArray = this.props.currentLevel;
      return (
        <section>
          {
          oilsArray.map((card, i) => {
            let url = card.url
            return (
              <div className="card" id="card" data-name={card.name}  style={this.props.cardStyle} onClick={this.handleBaseOilClick.bind(this)}key={i}>
                <a href="#"><img className="oil-photo" src={card.url} height='200' /></a>
                <p className="title">{card.name}</p>
                <p className="desc">{card.desc}</p>
                <a href="#"><div className="check"></div></a>
              </div>
            )
          })
          }
        </section>
      )
    }
  }

export default Cards;