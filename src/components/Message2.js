import React, { Component } from 'react';

class Message2 extends Component {

    constructor(){
        super();
        this.state = {
            msg: 'welcome visitor'
        };
    }

    changeMessage = () => {
        this.setState({
            msg: 'thanks for subscribing'
        });
    }
        
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick= {() => this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Message2;
