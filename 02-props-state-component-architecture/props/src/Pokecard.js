import React, { Component } from 'react';
import './Pokecard.css';

export default class Pokecard extends Component {
	render() {
		const {name, image, type} = this.props;
	return (
		<div className='card-body'>
			<h2>{name}</h2>
			<img src={image} />
			<h4><strong>Type</strong>{type}</h4>
		</div>
	)}
}