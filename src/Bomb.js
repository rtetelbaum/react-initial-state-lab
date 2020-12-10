import React from 'React'

class Bomb extends React.Component {
	
	state = { secondsLeft: this.props.initialCount }
	
	render() {
		if (this.state.secondsLeft > 0) {
			return (	
				<div>
					<h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
				</div>
				)
		} else {
			return (	
				<div>
					<h1>Boom!</h1>
				</div>
				)
		}
	}
}

export default Bomb;