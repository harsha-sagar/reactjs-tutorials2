import React, { Component } from 'react'

class CounterOne extends Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    increment() {
        this.state.count = this.state.count + 1 ;
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick= {() => {this.increment()}}>increment by 1</button>
            </div>
        )
    }
}

export default CounterOne
