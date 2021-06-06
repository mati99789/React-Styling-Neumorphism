import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
	html {
		font-size: 10px;
	}
  
  body {
    font-family: 'Roboto', sans-serif;
	  font-size: 1.6rem;
    height: 100vh;
  }
`;

export default GlobalStyle;