import styled from 'styled-components';

const StyledToggleBackground = styled.div`
  display: flex;
  justify-content: end;
	padding: 3rem;
  & label {
		display: flex;
	  align-items: center;
	  justify-content: space-between;
	  padding: 5px;
	  height: 30px;
	  width: 60px;
	  position: relative;
    border-radius: 50px;
    background: #81bcfe;
    box-shadow: inset 5px -5px 10px #4b6d93,
      inset -5px 5px 10px #b7ffff;
  }

	div.ball {
		background: #fff;
		height: 32px;
		width: 32px;
		position: absolute;
		border-radius: 50%;
		left: 0;
	}
	
	input.checkbox {
		opacity: 0;
	}
	
	.checkbox:checked + label .ball{
		transform: translateX(29px);
	}
	
`;

export default StyledToggleBackground;