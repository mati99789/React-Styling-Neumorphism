import styled, {css} from 'styled-components';

const StyledMainContainer = styled.main`
  background-color: #81BCFE ;
  color: #001F3F;
	height: 100vh;
	${props => props.darkTheme && css`
		background-color: #9d9d9d;
	`}
`;

export default StyledMainContainer;