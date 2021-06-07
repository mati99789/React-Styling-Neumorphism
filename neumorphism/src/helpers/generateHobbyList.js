import React from 'react';

import {dataListForm} from '../data/dataListForm';
import CheckboxHobby from '../components/CheckboxHobby/CheckboxHobby';


const generateHobbyList = () => {

	const lists = dataListForm.map((item) => {
		return (
			<>
				<CheckboxHobby name={item.name} text={item.text} id={item.id} class={item.class}/>
			</>
		);
	});

	return lists;
};


export default generateHobbyList;