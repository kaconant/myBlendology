import React, { Component } from "react";

class Carousels extends Component {

    render() {
        return(
        <div>
            {this.props.oils.filter((oil) => {
                if (oil.level === this.props.type) {
                    return (
                        <Oil oil={oil} />
                    )
                }
            })}
        </div>
        )
}
}
export default Carousels;