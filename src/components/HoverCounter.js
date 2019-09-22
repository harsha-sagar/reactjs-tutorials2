import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class HoverCounter extends Component {
	render() {
		const { count, incrementCounter } = this.props;

		return (
			<div>
				<button onMouseOver= { incrementCounter } >{this.props.name} Hovered { count } times</button>
			</div>
		);
	}
}

export default UpdatedComponent(HoverCounter);
