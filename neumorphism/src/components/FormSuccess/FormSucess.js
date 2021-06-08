import React from 'react';
import StyledFormSucess from './StyledFormSucess';

const FormSucess = (props) => {
	return (
		<StyledFormSucess>
			<h2><span className="fas fa-check"></span> Thank you for filling out the form!</h2>
			<button onClick={props.onBack}>Back</button>
		</StyledFormSucess>
	);
};

export default FormSucess;