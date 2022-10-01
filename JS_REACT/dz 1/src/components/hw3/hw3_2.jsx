import React, { Component } from "react";
import Hw3_3 from "./hw3_3";

class Hw3_2 extends Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render() {
        return(
            <>
                <div className="block3_2">
                    <h2 className="compB">Компонент В</h2>
                    <Hw3_3 
                            num={this.props.num}
                            random={this.props.random}/>
                </div>
            </>
        )
    }
}

export default Hw3_2;