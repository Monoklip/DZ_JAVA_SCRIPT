import React, { Component } from "react";
import Hw3_2 from "./hw3_2";
import '../style/hw3.scss';

class Hw3_1 extends Component{
    constructor(){
        super();

        this.state = {};
    }

    render() {
        return(
            <>
                <div className="box3_1">
                    <div className="box3">
                        <div className="text3">Отримане число:</div>
                        <div className="textRandom">{}</div>
                    </div>
                    <div className="block3_1">
                        <h2 className="compA">Компонент A</h2>
                        <Hw3_2/>
                    </div>
                </div>
            </>
        )
    }
}

export default Hw3_1;