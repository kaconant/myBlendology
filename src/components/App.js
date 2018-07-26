import React from 'react';
import '../App.css';
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
      let midOilList = this.state.oilData.filter(oil => {
        return oil.level === 'middle' && oil.mood === this.state.mood
      })
      let topOilList = this.state.oilData.filter(oil => {
        return oil.level === 'top' && oil.mood === this.state.mood
      })
      this.setState({ 
        baseLevel: baseOilList, 
        currentLevel: true, 
        midLevel: midOilList, 
        topLevel: topOilList
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


  render() {
    return (
        <div>
          <Navbar />
          <Jumbotron handleMoodClick={this.handleMoodClick} />
          <Carousels 
            mood={this.state.mood} 
            levelLabel="base" 
            currentLevel={this.state.baseLevel}/>
          <Carousels 
            mood={this.state.mood} 
            levelLabel="middle" 
            currentLevel={this.state.midLevel}/>
          <Carousels 
            mood={this.state.mood} 
            levelLabel="top" 
            currentLevel={this.state.topLevel}/>
          <Calculation />
          <Footer />
        </div>
    )
  }
}

export default App;
