import React, { Component } from 'react'

class CounterFour extends Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    increment() {
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                console.log(this.state.count);
            }
        );
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick= {() => {this.incrementFive()}}>increment by 1</button>
            </div>
        )
    }
}

export default CounterFour
