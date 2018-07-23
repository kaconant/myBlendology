import React, { Component } from "react";
import Base from "./Base.js"
import Middle from "./Middle.js"
import Top from "./Top.js"

class Carousels extends Component {

    render() {
        return(
        <div>
            <Base/>
            <Middle/>
            <Top/>
        </div>
        )
}
}
export default Carousels;