import React, {useState} from 'react';

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
import FormSucess from '../FormSuccess/FormSucess';
import useFormSucess from '../../hooks/useFormSucess';

const Form = () => {
	const [formSuccess, formSuccessHandler] = useFormSucess()
	const {
		handleChange,
		handleSubmit,
		values,
		errors,
		counterCheckboxHandler,
		checkChosenGender,
	} = useForm(validate);

	const errorsCount = Object.keys(errors).length;

	return (
		!formSuccess ? (
				<StyledForm onSubmit={e => {
					handleSubmit(e);
					formSuccessHandler();
				}}>
					<Row>
						<label htmlFor="firstName"><span><i className="far fa-user"></i></span></label>
						<Input type="text" id="firstName" placeholder="First Name" name="firstName" value={values.firstName}
						       changeHandler={handleChange}/>
					</Row>
					{errors.firstName && <ErrorContainer name={errors.firstName}/>}
					<Row>
						<label htmlFor="lastName"><span><i className="far fa-user"></i></span></label>
						<Input type="text" id="lastName" placeholder="Last name" name="lastName" value={values.lastName}
						       changeHandler={handleChange}/>
					</Row>
					{errors.lastName && <ErrorContainer name={errors.lastName}/>}
					<Row>
						<label htmlFor="emial"><span><i className="far fa-envelope"></i></span></label>
						<Input type="email" id="email" placeholder="Email" name="email" value={values.email}
						       changeHandler={handleChange}/>
					</Row>
					{errors.email && <ErrorContainer name={errors.email}/>}
					<Row>
						<RadioGenderToggle checkChosenGender={checkChosenGender}/>
					</Row>
					{errors.gender && <ErrorContainer name={errors.gender}/>}
					<Row>
						{generateHobbyList(counterCheckboxHandler)}
					</Row>
					{errors.hobbyLimit && <ErrorContainer name={errors.hobbyLimit}/>}
					<ProgressBar progressError={errorsCount} allFields={values}/>
					<Button type="submit" disabled={errorsCount !== 0}>Submit</Button>
				</StyledForm>
		) : <FormSucess onBack={formSuccessHandler}/>
	);
};

export default Form;