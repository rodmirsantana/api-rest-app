import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a > p {
    font-size: 1.8rem;
    background-color: #385898;
    color: #fff;
    width: 40%;
    border: 0.2rem;
    border-radius: 10px;
    margin: 2rem 18rem;
    padding: 1rem;
    line-height: 1.4;
    text-align: center;
  }

  @media (max-width: 500px) {
    a > p {
      width: 60%;
      margin: 2rem 8rem;
    }
  }

  p:hover {
    opacity: 0.7;
  }
`;

export default Header;
