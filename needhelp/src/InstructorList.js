import React, { Component } from 'react'
import Instructor from './Instructor'

class InstructorList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			instructors: ['Trevor', 'Emily', 'Scarlett', 'Issy']
		};
	}


	//handler for each invidual instructor 
	handleRemove(idx) {
		const { instructors } = this.state;
		const newInstructors = instructors.slice(0,idx).concat(instructors.slice(idx+1));
		this.setState({
			instructors: newInstructors
		});
	}

	render() {
		//validate the state into JS
		let instructors = this.state.instructors.map((name, idx) => {
			return (<Instructor 
				removeInstructor={this.handleRemove.bind(this,idx)}
				name={name}
				key={idx}
			/>)
		});
		return(
			<div>{instructors}</div>
		)
	}

}

export default InstructorList;