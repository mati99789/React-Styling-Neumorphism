import React, {useContext, useState} from 'react';

import StyledInput from './StyledInput';
import {ToggleThemeContext} from '../../context/ToggleThemeContext';

const Input = (props) => {
	const darkTheme = useContext(ToggleThemeContext);

	return (
		<StyledInput placeholder={props.placeholder} darkTheme={darkTheme} name={props.name} value={props.value}
		             onChange={props.changeHandler} onBlur={props.onBlur}/>
	);
};

export default Input;