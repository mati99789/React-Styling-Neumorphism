import React from 'react';

import hobbyList from '../data/hobbyList';
import CheckboxHobby from '../components/CheckboxHobby/CheckboxHobby';


const lists = hobbyList.map((item) => {
	return (
		<CheckboxHobby name={item.name} text={item.text} id={item.id} class={item.class}/>
	);
});

export default lists;