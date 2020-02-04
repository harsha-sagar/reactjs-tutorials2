import React, { Component } from 'react';

class Message1 extends Component {

    changeMessage = () => {
        this.props.msg = 'thanks for subscribing'
    }
        
    render() {
        return (
            <div>
                <h1>{this.props.msg}</h1>
                <button onClick= {() => this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Message1;
