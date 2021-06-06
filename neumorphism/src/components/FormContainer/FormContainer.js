import React, {useContext} from 'react';

import StyledFormContainer from './StyledFormContainer';
import {ToggleThemeContext} from '../../context/ToggleThemeContext';


const FormContainer = (props) => {
	const darkTheme = useContext(ToggleThemeContext);

	return (
		<>
			<StyledFormContainer darkTheme={darkTheme}>
				{props.children}
			</StyledFormContainer>
		</>
	);
};

export default FormContainer;