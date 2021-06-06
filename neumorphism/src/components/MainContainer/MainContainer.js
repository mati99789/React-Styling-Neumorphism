import React from 'react';

import ToggleBackground from '../ToggleBackground/ToggleBackground';
import FormContainer from '../FormContainer/FormContainer';
import Form from '../Form/Form';
import Title from './../Title/Title';

import useToggleTheme from '../../hooks/useToggleTheme';
import StyledMainContainer from './StyledMainContainer';
import {ToggleThemeContext} from '../../context/ToggleThemeContext';

const MainContainer = (props) => {
	const [check, toggleBackground] = useToggleTheme();

	return (
		<ToggleThemeContext.Provider value={check}>
			<StyledMainContainer darkTheme={check}>
				<ToggleBackground change={toggleBackground}/>
				<FormContainer>
					<Title/>
					<Form/>
				</FormContainer>
			</StyledMainContainer>
		</ToggleThemeContext.Provider>
	);
};

export default MainContainer;