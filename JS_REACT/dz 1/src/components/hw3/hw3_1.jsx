import React, { Component } from "react";
import Hw3_2 from "./hw3_2";
import '../style/hw3.scss';

class Hw3_1 extends Component{
    constructor(){
        super();

        this.state = {
            num: ``,
        };
    }

    random =()=> {
        this.setState({num: Math.floor(Math.random() * 10000)});
        console.log(this.state.num);
    }

    render() {
        return(
            <>
                <div className="box3_1">
                    <div className="box3">
                        <div className="text3">Отримане число:</div>
                        <div className="textRandom">{this.state.num}</div>
                    </div>
                    <div className="block3_1">
                        <h2 className="compA">Компонент A</h2>
                        <Hw3_2 
                            num={this.state.num}
                            random={this.random}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Hw3_1;