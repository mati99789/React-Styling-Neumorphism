import React from 'react';

import Row from '../Row/Row';
import Input from '../Input/Input';
import RadioGenderToggle from '../RadioGenderToggle/RadioGenderToggle';
import ProgressBar from '../PregressBar/ProgressBar';
import Button from '../Button/Button';
import ErrorContainer from '../ErrorContainer/Errors';

import generateHobbyList from '../../helpers/generateHobbyList';
import StyledForm from './StyledForm';

import useForm from './../../hooks/useForm';
import validate from './../../helpers/validationInfo';

const Form = () => {
	const {handleChange, handleSubmit,handleErrors, values, errors} = useForm(validate);

	return (
		<StyledForm onSubmit={handleSubmit}>
			<Row>
				<label htmlFor="firstName"><span><i className="far fa-user"></i></span></label>
				<Input type="text" id="firstName" placeholder="First Name" name="firstName" value={values.firstName}
				       changeHandler={handleChange} onBlur={handleErrors}/>
			</Row>
			{errors.firstName && <ErrorContainer name={errors.firstName}/>}
			<Row>
				<label htmlFor="lastName"><span><i className="far fa-user"></i></span></label>
				<Input type="text" id="lastName" placeholder="Last name" name="lastName" value={values.lastName}
				       changeHandler={handleChange} />
			</Row>
			{errors.lastName && <ErrorContainer name={errors.lastName}/>}
			<Row>
				<label htmlFor="emial"><span><i className="far fa-envelope"></i></span></label>
				<Input type="email" id="email" placeholder="Email" name="email" value={values.email}
				       changeHandler={handleChange} />
			</Row>
			{errors.email && <ErrorContainer name={errors.email}/>}
			<Row>
				<RadioGenderToggle changeHandler={handleChange} checked={values.gender} />
			</Row>
			{errors.gender && <ErrorContainer name={errors.gender} />}
			<Row>
				{generateHobbyList()}
			</Row>
			{errors.hobbyLimit && <ErrorContainer name={errors.hobbyLimit} />}
			<ProgressBar/>
			<Button type="submit">Submit</Button>
		</StyledForm>
	);
};

export default Form;