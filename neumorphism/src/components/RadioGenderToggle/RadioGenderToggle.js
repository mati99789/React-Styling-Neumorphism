import React from 'react';
import StyledRadioGenderToggle from './StyledRadioGenderToggle';
import {genderList} from '../../data/dataListForm';

import useCheckbox from '../../hooks/useCheckbox';

const RadioGenderToggle = (props) => {
	const [checked, checkedHandler] = useCheckbox();
	const list = genderList.map((item) => {
		return(
			<StyledRadioGenderToggle key={item.id + checked}>
				<input onChange={e => {
					checkedHandler(e);
					props.changeHandler(e);
				}} checked={checked} type="radio" id={item.text} name={item.name}/>
				<label htmlFor={item.text}>{item.text}</label>
			</StyledRadioGenderToggle>
		)
	});

	return(
		<>
			{list}
		</>
	)
}

export default RadioGenderToggle;