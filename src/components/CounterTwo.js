import React, { Component } from 'react'

class CounterOne extends Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
        // usecase1: never update the state directly, rather make use of setState method
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
