import React from 'react';
import ListComponent from './ListComponent.jsx'

const array = ['first', 'second', 'third'];

const MyComponent = () => {
	return (
		
		<ListComponent array={array} />

	); 
}

export default MyComponent;