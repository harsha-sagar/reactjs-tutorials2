import React, { Component } from 'react'

class CounterOne extends Component {
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
        // usecase2: incase anything to be addressed post updating the state, place it as call back in the setState method
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
