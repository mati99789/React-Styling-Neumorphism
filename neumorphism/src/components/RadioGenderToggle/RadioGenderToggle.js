import React from 'react';
import StyledRadioGenderToggle from './StyledRadioGenderToggle';

const RadioGenderToggle = (props) => {
	return(
		<StyledRadioGenderToggle>
			<input onBlur={props.changeHandler} type="radio" id='female' name='gender'/>
			<label htmlFor='female'>Female</label>
			<input onBlur={props.changeHandler} type="radio" id='male' name='gender'/>
			<label htmlFor='male'>Male</label>
		</StyledRadioGenderToggle>
	)
}

export default RadioGenderToggle;