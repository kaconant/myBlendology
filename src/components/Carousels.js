import React, { Component } from "react";
import Oil from './Oil.js'
class Carousels extends Component {

    render() {
        return(
        <div>
            {this.state.oilData.filter((eachOil) => {
                if (eachOil.level === this.props.level) {
                    return (
                        <Oil eachOil={eachOil} />
                    )
                }
            })}
        </div>
        )
}
}
export default Carousels;