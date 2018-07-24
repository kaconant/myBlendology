import React, { Component } from "react";
import Carousels from "./Carousels.js"
import Oils from '../essentialOils.js'

class Oil extends Component {

    render() {
        return(
        <div>
            <Carousels/>
            <Oils/>
        </div>
        )
    }
}
export default Oil;