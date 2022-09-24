import React from 'react';
import Element from './Element.jsx'

const elementValue = ['firstElement', 'secondElement', 'thirdElement'];

const List = (props) => {
		return (

			<li>
				<b>{props.valueList.id}. {props.valueList.content}</b>
                <ul><Element elementValue={elementValue}/></ul>
			</li>

		);
};

export default List;