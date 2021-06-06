import styled from 'styled-components';

const StyledRadioGenderToggle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	
	input[type="radio"] {
		opacity: 0;
	}
	
	label {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
    border-radius: 14px;
    background: #e0e0e0;
    box-shadow:  8px 8px 13px #929292,
      -8px -8px 13px #ffffff;
		padding: .5rem;
	}
	
	input[type="radio"]:checked + label {
    border-radius: 14px;
    background: #e0e0e0;
    box-shadow: inset 8px 8px 13px #929292,
      inset -8px -8px 13px #ffffff;
	}
`;

export default StyledRadioGenderToggle;