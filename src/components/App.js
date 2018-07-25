import React from 'react';
import '../App.css';
// import Coverflow from 'react-coverflow';
// import { StyleRoot } from 'radium';
import Display from './Coverflow.js';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron.js';
import Carousels from './Carousels.js';
import Calculation from './Calculation.js'
import Footer from './Footer.js';
import { EssentialOils } from '../essentialOils';

// Nav bar > Jumbotron > MoodSelector > Base > Middle > Top > Combine > Calculation > Footer
// lets try to render with it all on one page and then break it out later

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        mood: null, 
        baseLevel: [], 
        midLevel: [], 
        topLevel: [],
        oilData: [],
        currentLevel: null
    }

    this.handleMoodClick = this.handleMoodClick.bind(this);

}

  handleMoodClick(e) {
    this.setState({
      mood: e.target.dataset.mood
    }, function() {
      let baseOilList = this.state.oilData.filter(oil =>{
        return oil.level === 'base' && oil.mood === this.state.mood
      });
      this.setState({ 
        baseLevel: baseOilList, 
        currentLevel: "base"
      }, function () {
        console.log(this.state.mood)
      })
  })
  }

  componentDidMount() {
    let oilData = EssentialOils();
    this.setState({
      oilData
    })
  }





  // render() {
      // return <h1 onClick={ this.handleMoodClick.bind(this) }>{ this.state.mood}</h1>
      // console.log(this.state.mood)
  // }
  


  render() {
    // if (this.state.currentLevel === null) {
    //   var carousel = <div></div>
    // } else {
    //   var carousel = <Display />
    // }

    return (
        <div>
          <Navbar />
          <Jumbotron handleMoodClick={this.handleMoodClick} />
          <Display mood={this.state.mood} baseLevel={this.state.baseLevel} currentLevel={this.state.currentLevel}/>
          {/* {this.state.currentLevel === null ? <div></div> : <Display baseLevel={this.state.baseLevel} mood={this.state.mood}/>} */}
          {/* <Carousels mood={this.state.mood} level="base" handleClick={this.handleClick} oils={this.state.oilsData} /> */}
          {/* <Carousels mood={this.state.mood} level="middle" handleClick={this.handleClick} oils={this.state.oilsData} /> */}
          {/* <Carousels mood={this.state.mood} level="top" handleClick={this.handleClick} oils={this.state.oilsData} /> */}
          <Calculation />
          <Footer />
        </div>
    )
  }
}

export default App;
