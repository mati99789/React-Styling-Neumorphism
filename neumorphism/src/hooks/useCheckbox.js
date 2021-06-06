import React, {useState} from 'react';

const useCheckbox = () => {
	const [checked, setIsChecked] = useState(false);

	const checkedHandler = () => {
		return !checked ? setIsChecked(true) : setIsChecked(false);
	}

	return[checked, checkedHandler];
}

export default useCheckbox;