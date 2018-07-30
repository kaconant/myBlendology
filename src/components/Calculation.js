import React, { Component } from 'react';

class Calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toShow: false,
        }
    }

    handleChange(e) {
        e.preventDefault();
        if (this.props.selected.base !== "" && this.props.selected.middle !== '' && this.props.selected.top !== "") {
            this.setState({toShow: true}) 
         } else {
             alert('You must select a base, middle, and top oil to calculate your blend!');
         }
    }

    handleModalClick(e) {
        e.preventDefault();

    }

    render() {
        return (
        <div className="Calc">
            {this.props.toShow === true && <button className="blendCalc" onClick={this.handleChange.bind(this)}>Calculate!</button>}
            <div className="blendResults">
            {this.state.toShow === true && <h5 className="calcOils">5 drops of { this.props.selected.base }</h5>}
            {this.state.toShow === true && <h5 className="calcOils">4 drops of { this.props.selected.middle }</h5>}
            {this.state.toShow === true && <h5 className="calcOils">3 drops of { this.props.selected.top }</h5>}
            </div>
            {this.state.toShow === true && <a href="/"className="shareBlend transparent_btn" data-toggle="modal" data-target="#share">Share Your Blend</a>}
        </div>
        )
}
}
export default Calculation;