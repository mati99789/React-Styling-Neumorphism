import {v4 as uuidv4} from 'uuid';

const dataListForm = [
	{text: 'Football', name: 'sport', class: 'fas fa-futbol', id: uuidv4(), isCheck:false},
	{text: 'Tenis', name: 'sport', class: 'fas fa-table-tennis', id: uuidv4(), isCheck:false},
	{text: 'Golf', name: 'sport', class: 'fas fa-golf-ball', id: uuidv4(), isCheck:false},
	{text: 'Swimming', name: 'sport', class: 'fas fa-swimmer', id: uuidv4(), isCheck:false},
	{text: 'Hockey', name: 'sport', class: 'fas fa-hockey-puck', id: uuidv4(), isCheck:false},
	{text: 'Volleyball', name: 'sport', class: 'fas fa-volleyball-ball', id: uuidv4(), isCheck:false},
	{text: 'Basketball', name: 'sport', class: 'fas fa-basketball-ball', id: uuidv4(), isCheck:false},
	{text: 'Baseball', name: 'sport', class: 'fas fa-baseball-ball', id: uuidv4(), isCheck:false},
	{text: 'Running', name: 'sport', class: 'fas fa-running', id: uuidv4(), isCheck:false},
	{text: 'Bowling', name: 'sport', class: 'fas fa-bowling-ball', id: uuidv4(), isCheck:false},
	{text: 'Ski', name: 'sport', class: 'fas fa-skiing', id: uuidv4(), isCheck:false},
	{text: 'Biking', name: 'sport', class: 'fas fa-biking', id: uuidv4(), isCheck:false},
	{text: 'Lazy', name: 'sport', class: 'fas fa-skull-crossbones', id: uuidv4(), isCheck:false},
];

const genderList = [
	{name: 'gender', text: 'Female', id: uuidv4()},
	{name: 'gender', text: 'Male', id: uuidv4()},
]

export {dataListForm, genderList};