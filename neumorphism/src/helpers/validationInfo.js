export default function validateInfo(values) {
	let errors = {};

	if (!values.firstName.trim()) {
		errors.firstName = 'User name required';
	}

	if (!values.lastName.trim()) {
		errors.lastName = 'Last name required';
	}

	if (!values.email.trim()) {
		errors.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}

	if(!values.gender) {
		errors.gender = 'Please choose gender! '
	}
	return errors;
}