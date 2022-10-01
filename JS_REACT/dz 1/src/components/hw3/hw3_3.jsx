import React, { Component } from "react";

class Hw3_3 extends Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render() {
        return(
            <>
               <div className="block3_3">
                    <h2 className="compC">Компонент С</h2>
                    <button className="btn" onClick={this.props.random}>RandomCount: {this.props.num}</button>
               </div>
            </>
        )
    }
}

export default Hw3_3;