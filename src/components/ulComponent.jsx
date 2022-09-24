import React from 'react';
import List from './List.jsx'

const UlComponent = ({ value }) => {
	
	return (

		<div className="bloglist">
			{value.map((valueList) =>
				<List valueList={valueList} />
			)}
		</div>

	);
};

export default UlComponent;