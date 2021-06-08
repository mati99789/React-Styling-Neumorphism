import React from 'react';
import StyledRadioGenderToggle from './StyledRadioGenderToggle';
import {genderList} from '../../data/dataListForm';


const RadioGenderToggle = (props) => {

	const list = genderList.map((item, index) => {
		return (
			<StyledRadioGenderToggle key={item.id}>
				<input type="radio" id={item.text} name={item.name} value={item.text} onChange={e => props.checkChosenGender(e, item.text)} />
				<label htmlFor={item.text}>{item.text}</label>
			</StyledRadioGenderToggle>
		);
	});

	return (
		<>
			{list}
		</>
	);
};

export default RadioGenderToggle;