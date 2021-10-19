import styled, {css} from 'styled-components';

const StyledFormContainer = styled.section`
  border-radius: 26px;
  background: #81bcfe;
  box-shadow:  13px 13px 26px #4b6d93,
    -13px -13px 26px #b7ffff;
	width: 50vw;
	margin: 0 auto;
	padding: 1rem;

  ${props => props.darkTheme && css`
    -webkit-border-radius: 11px;
    border-radius: 11px;
    background: #9d9d9d;
    -webkit-box-shadow: 8px 8px 26px #3f3f3f,
      -8px -8px 26px #fbfbfb;
    box-shadow: 8px 8px 26px #3f3f3f,
      -8px -8px 26px #fbfbfb;
	`}
`;


export default StyledFormContainer;