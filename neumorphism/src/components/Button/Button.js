import React from 'react';

import StyledButton from './StyledButton';

const Button = (props) => {
	return (
		<StyledButton type="submit">{props.children}</StyledButton>
	);
};

export default Button;