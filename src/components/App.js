import React from 'react';
import '../App.css';
// import Coverflow from 'react-coverflow';
// import { StyleRoot } from 'radium';
import Display from './Coverflow.js';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron.js';
import MoodSelector from './MoodSelected.js';
import Carousels from './Carousels.js';
import Combine from './Combine.js'
import Calculation from './Calculation.js'
import Footer from './Footer.js';


// Nav bar > Jumbotron > MoodSelector > Base > Middle > Top > Combine > Calculation > Footer
// lets try to render with it all on one page and then break it out later

class App extends React.Component {

  render() {
    return (
        <div>
          <Navbar/>
          <Jumbotron/>
          <MoodSelector/>
          <Display />
          <Carousels/>
          <Combine/>
          <Calculation/>
          <Footer/>
        </div>
    )
  }
}

export default App;
