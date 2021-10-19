import StyledRow from './StyledRow'

const Row = (props) => {
	return (
		<StyledRow>{props.children} </StyledRow>
	)
}

export default Row;