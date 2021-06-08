import styled from 'styled-components';

const StyledProgressBar = styled.progress`
	&[value] {
    -webkit-appearance: none;
    width: 66%;
    height: 20px;
    overflow: hidden;
    color: #aaa;
    border-radius: 10px;
    background: #81BCFE;
    box-shadow: inset 12px 12px 25px #fff,
      inset -12px -12px 25px #fff;
		
  }
`;

export default StyledProgressBar;
