import styled from 'styled-components';

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const UserName = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.8rem;
    color: #444;
    margin: 5px;
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 1rem 1.5rem;
    font-size: 1.8rem;
    color: #444;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  h1 {
    font-size: 1.6rem;
    margin: 0 1.5rem;
  }
`;

export const Button = styled.button`
  background: #385898;
  width: 40%;
  border: 0;
  padding: 1.1rem 1.7rem;
  margin: 2.4rem;
  border-radius: 1.14rem;

  p {
    font-weight: 600;
    font-size: 1.8rem;
    color: #fff;
  }

  :hover {
    opacity: 0.7;
  }

  :disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
