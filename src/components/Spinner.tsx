import styled, { keyframes } from 'styled-components';

const Animation1 = keyframes`   
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const Animation3 = keyframes`   
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const Animation2 = keyframes`   
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const SpinnerStyle = styled.div`
  position: absolute;
  height: 80px;
  width: 80px;
  top: 50%;
  left: 50%;
  margin-left: -30px;
  margin-top: -50px;
  background-size: 100%;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.red};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 8px;
    animation: ${Animation1} 0.6s infinite;
  }

  div:nth-child(2) {
    left: 8px;
    animation: ${Animation2} 0.6s infinite;
  }

  div:nth-child(3) {
    left: 32px;
    animation: ${Animation2} 0.6s infinite;
  }

  div:nth-child(4) {
    left: 56px;
    animation: ${Animation3} 0.6s infinite;
  }
`;

const Spinner = () => {
  return (
    <SpinnerStyle aria-label='Loading'>
      <div />
      <div />
      <div />
      <div />
    </SpinnerStyle>
  );
};

export default Spinner;
