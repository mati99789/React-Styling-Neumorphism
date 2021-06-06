import React from 'react';

import './App.css';
import MainContainer from './components/MainContainer/MainContainer';

import ResetStyle from './styles/Reset';
import GlobalStyle from './styles/Global';

function App() {
	return (
		<>
			<ResetStyle/>
			<GlobalStyle/>
			<MainContainer/>
		</>
	);
}

export default App;
