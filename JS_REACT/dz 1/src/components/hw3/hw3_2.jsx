import React, { Component } from "react";
import Hw3_3 from "./hw3_3";

class Hw3_2 extends Component{
    constructor(){
        super();

        this.state = {};
    }

    render() {
        return(
            <>
                <div className="block3_2">
                    <h2 className="compB">Компонент В</h2>
                    <Hw3_3/>
                </div>
            </>
        )
    }
}

export default Hw3_2;