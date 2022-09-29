import React, { Component } from 'react';
import Hw1 from './components/hw1/Hw1';
import Hw2 from './components/hw2/Hw2';
import Hw3 from './components/hw3/hw3_1';


class App extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div>
        <Hw1 />
        <Hw2 />
        <Hw3 />
      </div>
    )
  }
}

export default App;
