import styled, {css} from 'styled-components';

const StyledInput = styled.input`
  border-radius: 20px;
  background: #81bcfe;
  box-shadow: inset 5.71px 5.71px 6px #347175, inset -5.71px -5.71px 6px #9BFFFF;
	border: none;
	margin-left: 10px;
  outline:none;
	padding: 1rem;

  ${props => props.darkTheme && css`
    border-radius: 34px;
    background: #9d9d9d;
    box-shadow: inset 5px 5px 10px #5e5e5e,
      inset -5px -5px 10px #dcdcdc
	`}
`;


export default StyledInput;