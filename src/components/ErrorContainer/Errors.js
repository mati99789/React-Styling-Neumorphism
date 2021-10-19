import React from 'react';

import StyledErrors from './StyledErrors';

const ErrorContainer = (props) => {
	return(
		<StyledErrors>{props.name}</StyledErrors>
	)
}

export default ErrorContainer;