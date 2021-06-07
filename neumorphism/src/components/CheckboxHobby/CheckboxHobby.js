import React, {useState, useContext} from 'react';
import StyledCheckboxHobby from './StyledCheckboxHobby';
import useCheckbox from './../../hooks/useCheckbox';

const CheckboxHobby = (props) => {
	const [checked, checkedHandler] = useCheckbox();

	return (
		<StyledCheckboxHobby key={props.id + checked}>
			<input type="checkbox" name={props.name} id={props.text} checked={checked} onChange={checkedHandler}/>
			<label htmlFor={props.text}>
				<span className={props.class}>
					{props.text}
				</span>
			</label>
		</StyledCheckboxHobby>
	);
};

export default CheckboxHobby;