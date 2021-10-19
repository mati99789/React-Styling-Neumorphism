import React from 'react';
import StyledToggleBackground from './StyledToggleBackground';

const ToggleBackground = ({change}) => {

	return (
		<StyledToggleBackground onChange={change}>
			<input className="checkbox" type="checkbox" id="checkbox"/>
			<label htmlFor="checkbox">
				<span className="sun">🌞</span>
				<span className="moon">🌜</span>
				<div className="ball"></div>
			</label>
		</StyledToggleBackground>
	);
};

export default ToggleBackground;