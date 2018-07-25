import React, { Component } from "react";
import Carousels from "./Carousels.js"
class Oil extends Component {
  render(props, i) {
    return(
    <div className="card" id="card" style={this.props.cardStyle} key={i}>
      <p className="title">{this.props.oil.name}</p>
      <p className="desc">{this.props.oil.desc}</p>
      <a href="#"><img src={this.props.oil.url} height='200' /></a>
    </div>
    )
  }
}

// let Oil = ({ name, desc, url }) => (
//     <div>
// )
export default Oil;