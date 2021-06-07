import React, {useState} from 'react';

const useHobbysLimit = (checked) => {
	const [countedHobby, setCountedHobby] = useState(0);

	const hobbyListHandler = (e) => {
		e.preventDefault();
		if(checked) {
			setCountedHobby(countedHobby + 1);
		}
	}
	return [countedHobby, hobbyListHandler];
}

export default useHobbysLimit;