import React, { Component } from "react";
import '../style/hw2.scss';

class Hw2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Task-1',
        };

        this.rename = this.rename.bind(this);
    }

    rename(event) {

        if (event.target.value === ``) {
            this.setState({ text: `Task-1`});
        } 
        else{
            this.setState({ text: event.target.value });
        }
    }

    render() {
        return (
            <>
                <div className="box2">
                    <h1 className="text2">{this.state.text}</h1>
                    <input className="input" type="text" onChange={this.rename} placeholder='Введіть текст'/>
                </div>
            </>
        );
    }
}

export default Hw2;