import React, { Component } from "react";
import '../style/hw1.scss';

class Hw1 extends Component {
  constructor(){
    super();

    this.state = {
      number: 0,
    }
  }

  num1 =()=> {
    this.setState({number: this.state.number + 1});
  }
  num5 =()=> {
    this.setState({number: this.state.number + 5})
  }
  num10 =()=> {
    this.setState({number: this.state.number + 10})
  }
  num_1 =()=> {
    this.setState({number: this.state.number - 1});
  }
  num_5 =()=> {
    this.setState({number: this.state.number - 5})
  }
  num_10 =()=> {
    this.setState({number: this.state.number - 10})
  }

  render() {
    return(
      <>
        <div className="box1">
          <h1 className="text1">{this.state.number}</h1>
          <div className="box-btn">
            <button className="increment" onClick={this.num1}>+ 1</button>
            <button className="increment" onClick={this.num5}>+ 5</button>
            <button className="increment" onClick={this.num10}>+ 10</button>
          </div>
          <div className="box-btn">
            <button className="decrement" onClick={this.num_1}>- 1</button>
            <button className="decrement" onClick={this.num_5}>- 5</button>
            <button className="decrement" onClick={this.num_10}>- 10</button>
          </div>
        </div>
      </>
    )
  }
}

export default Hw1;
