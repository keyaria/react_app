import React, { Component } from 'react';
import Counter from "./counter"
import { Button } from 'semantic-ui-react'
class Counters extends Component {
	

	render() {
		return (
			<div>
			<Button onClick={this.props.onReset} color='blue'>Reset </Button>

				{ this.props.counters.map(counter => 
					<Counter 
					key={counter.id} 
					onDelete={this.props.onDelete}
					onIncrement={this.props.onIncrement}

					counter = {counter} />)}
			</div>
		);
	}
}

export default Counters;