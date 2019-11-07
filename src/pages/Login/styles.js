import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    margin: 5px 0;
    border-radius: 4px;
    font-size: 16px;
  }

  input:invalid {
    border: 2px solid #f21516;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading || !props.email || !props.password,
}))`
  background: #385898;
  width: 40%;
  border: 0;
  padding: 10px 15px;
  margin: 20px;
  border-radius: 10px;

  p {
    font-size: 16px;
    color: #fff;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
