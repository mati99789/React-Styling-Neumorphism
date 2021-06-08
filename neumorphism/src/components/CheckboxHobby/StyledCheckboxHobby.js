import styled from 'styled-components';

const StyledCheckboxHobby = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 0.5rem;
	
	
  & input[type="checkbox"] {
    opacity: 0;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    background: #e0e0e0;
    box-shadow:  8px 8px 13px #929292,
      -8px -8px 13px #ffffff;
    padding: .5rem;
  }

  input[type="checkbox"]:checked + label {
    border-radius: 14px;
    background: #e0e0e0;
    box-shadow: inset 8px 8px 13px #929292,
      inset -8px -8px 13px #ffffff;
  }
	
	& span {
		padding: 0.4rem;
	}
	
`;

export default StyledCheckboxHobby;