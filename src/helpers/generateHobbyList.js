import React from 'react';

import {dataListForm} from '../data/dataListForm';
import CheckboxHobby from '../components/CheckboxHobby/CheckboxHobby';


const generateHobbyList = (counterCheckboxHandler) => {

	const lists = dataListForm.map((item) => {
		return (
			<>
				<CheckboxHobby name={item.name} counterCheck={counterCheckboxHandler} text={item.text} id={item.id} class={item.class} isCheck={item.isCheck}/>
			</>
		);
	});

	return lists;
};


export default generateHobbyList;