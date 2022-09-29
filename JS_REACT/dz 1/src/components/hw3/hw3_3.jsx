import React, { Component } from "react";
// import Hw3_4 from "./hw3_4";

class Hw3_3 extends Component{
    constructor(){
        super();

        this.state = {
            num: '',
        };
    }

    random =()=> {
        this.setState({num: Math.floor(Math.random() * 10000)});
        console.log(this.state.num);
    }

    render() {
        return(
            <>
               <div className="block3_3">
                    <h2 className="compC">Компонент С</h2>
                    <button className="btn" onClick={this.random}>RandomCount: {this.state.num}</button>
               </div>
            </>
        )
    }
}

export default Hw3_3;