import styled from 'styled-components';

const StyledButton = styled.button`
	border: none;
	padding: 1rem 4rem;
	margin: 3rem;
  border-radius: 10px;
  background: #55b9f3;
  box-shadow:  -9px -9px 18px #3c82aa,
  9px 9px 18px #6ff1ff;
	
	&:active {
    border-radius: 10px;
    background: #55b9f3;
    box-shadow: inset 7px 7px 14px #3c82aa,
      inset -7px -7px 14px #6ff1ff;
	}
	
	&:disabled {
    background: #55b9f3;
    box-shadow:  -9px -9px 18px #3c82aa,
    9px 9px 18px #6ff1ff;
	}
`;

export default StyledButton;