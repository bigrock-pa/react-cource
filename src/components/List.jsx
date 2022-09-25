import React from 'react';
import Element from './Element.jsx'

const elementValue = ['firstElement', 'secondElement', 'thirdElement'];

const List = (props) => {
		return (

			<li>
				<b>{props.valueList}</b>
                <ul><Element elementValue={elementValue}/></ul>
			</li>

		);
};

export default List;