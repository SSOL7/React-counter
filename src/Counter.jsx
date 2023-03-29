import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
      }

    increase = () => {
        if(this.state.count === 10) {
            alert("You can't go above 10");
        }
        else {
            this.setState({
                count: this.state.count + 1
            });
        }
    }

    decrease = () => {
        if(this.state.count === 0) {
            alert("You can't go below 0");
        } else {
            this.setState({
                count: this.state.count - 1
            });
        }
    }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }
}

export default Counter
