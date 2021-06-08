import styled, {css} from 'styled-components';

const StyledMainContainer = styled.main`
  background-color: #81BCFE ;
  color: #001F3F;
	${props => props.darkTheme && css`
		background-color: #9d9d9d;
		height: 100vh;
	`}
`;

export default StyledMainContainer;