import React, { Component } from 'react';


const WithCounter = (OriginalComponent) => {
	
	class EnhancedComponent extends Component {
		constructor(props) {
			super(props)
		
			this.state = {
				 count: 0
			}
		}

		incrementCounter = () => {
			this.setState( prevState => {
				return { count: prevState.count + 1};	
			});
		}

		render() {
			const { count } = this.state;
			return <OriginalComponent count = {this.state.count} incrementCounter = {this.incrementCounter} {...this.props} /> ;
		}
	}
	return EnhancedComponent;
};

export default WithCounter;
