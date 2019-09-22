import React, { Component } from 'react';
import { UserConsumer } from './UserContext';
import UserContext from './UserContext';

class ComponentF extends Component {
	render() {
		return (
			<UserConsumer>
				{
					(userName) => {
						return <div>Hello { this.context }</div>
					}
				}
			</UserConsumer>
		);
	}
}

ComponentF.contextType = UserContext;

export default ComponentF;
