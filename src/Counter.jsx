import React, { Component } from 'react'
import './App.css'

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
            // random color for each number
        }
    }

    add5 = () => {
        if(this.state.count === 10) {
            const random_color = Math.floor(Math.random()*16777215).toString(16);
            alert("You can't go above 10");
        } else {
            this.setState({
                count: this.state.count + 5
            });
        }
    }

    decrease5 = () => {
        if(this.state.count === 0) {
            alert("You can't go below 0");
        } else {
            this.setState({
                count: this.state.count - 5
            });
        }
    }

    reset = () => {
        this.setState({
            count: 0
        });
    }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.decrease}>Decrease by 1</button>

        <button onClick={this.increase}>Increase by 1</button>

        <button onClick={this.add5}>+5</button>

        <button onClick={this.decrease5}>-5</button>

        <p>Count: {this.state.count}</p>

        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default Counter
