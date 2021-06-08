import {useState} from 'react';

const useToggleTheme = () => {
	const [check, setCheck] = useState(false);

	const toggleBackground = () => {
		return !check ? setCheck(true) : setCheck(false);
	}

	return[check, toggleBackground];
};

export default useToggleTheme;