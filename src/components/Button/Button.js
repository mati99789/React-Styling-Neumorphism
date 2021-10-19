import React from 'react';

import StyledButton from './StyledButton';

const Button = (props) => {
	return (
		<StyledButton disabled={props.disabled} type="submit">{props.children}</StyledButton>
	);
};

export default Button;