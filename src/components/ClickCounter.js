import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class ClickCounter extends Component {
	render() {
		const { count, incrementCounter } = this.props;

		return (
			<div>
				<button onClick= { incrementCounter } >{this.props.name} Clicked { count } times</button>
			</div>
		);
	}
}

export default UpdatedComponent(ClickCounter);
