import styled from 'styled-components';

const StyledProgressBar = styled.progress`
  -webkit-appearance:none;
  width:66%;
  height:20px;
  overflow:hidden;
  color: #aaa;
  border-radius: 10px;
  background: #81BCFE;
  box-shadow: inset 12px 12px 25px #fff,
    inset -12px -12px 25px #fff;

  &::-webkit-progress-bar {
    background:#f1f1f1;
  }
  &::-webkit-progress-value {
    background:#aaa;
  }
  &::-moz-progress-bar {
    background:#aaa;
  }
`;

export default StyledProgressBar;
