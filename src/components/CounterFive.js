import React, { Component } from 'react'

class CounterFive extends Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    increment() {
        this.setState(
            (lastUpdatedState) => ({
                count: lastUpdatedState.count + 1
            }),
            () => {
                console.log(this.state.count);
            }
        );
        // usecase-3: inorder to differentiate multiple setState calls & carry over latest updated state 
        // across the calls, pass the function rather object for updating the state. setState ensures to
        // get latest updated state & then invoke the function to update the state.
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

export default CounterFive
