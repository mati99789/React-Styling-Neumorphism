import {useState, useEffect} from 'react';

const useForm = (validate) => {
	const initial = {
		firstName: '',
		lastName: '',
		email: '',
		gender: false,
		checkHobby: 0,
	};
	const [values, setValues] = useState(initial);
	const [errors, setErrors] = useState({});

	const handleChange = e => {
		e.preventDefault();
		const {name, value} = e.target;

		setValues({
			...values,
			[name]: value
		});

		if(values[name].length !== 0) {
			setErrors(validate(values))
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		setErrors(validate(values));
	};

	useEffect(() => {
		setErrors(validate(values));
	}, [(values)]);


	return {handleChange, handleSubmit, values, errors};
};

export default useForm;