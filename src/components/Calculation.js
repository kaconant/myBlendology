import React, { Component } from 'react';

class Calculation extends Component {

    handleChange(e) {
        e.preventDefault();

    }

    handleModalClick(e) {
        e.preventDefault();

    }

    render() {
        return (
        <div className="Calc">
            <button className="blendCalc" onClick={() => this.handleClick()}>Make Your Blend</button>
            <div className="blendResults">
                <h5 className="calcOils">5 drops of { this.props.selected.base }</h5>
                <h5 className="calcOils">4 drops of { this.props.selected.middle }</h5>
                <h5 className="calcOils">3 drops of { this.props.selected.top }</h5>
            </div>
            <button className="shareBlend" onClick={() => this.handleModalClick()}>Share Your Blend</button>
        </div>
        )
}
}
export default Calculation;