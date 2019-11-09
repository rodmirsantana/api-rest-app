import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #388898;

  li {
    padding: 1.4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 600px) {
      html {
        font-size: 50%;
      }
    }

    & + li {
      border-top: 1px solid #eee;
    }
  }

  img {
    width: 12rem;
    border-radius: 50%;
    margin: 1.2rem 1.8rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    margin: 1rem 1.5rem;
    font-size: 1.5rem;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  a > p {
    font-size: 1.8rem;
    background-color: #385898;
    color: #fff;
    width: 40%;
    border: 0.2rem;
    border-radius: 1.14rem;
    margin: 1rem 18rem;
    padding: 0.5rem;
    line-height: 1.4;
    text-align: center;
  }

  @media (max-width: 1080px) {
    a > p {
      width: 50%;
      margin: 1rem 18rem;
    }
  }

  @media (max-width: 650px) {
    a > p {
      width: 30%;
      margin: 1rem 22rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 540px) {
    a > p {
      margin: 3rem 18rem;
      width: 30%;
    }
  }

  @media (max-width: 400px) {
    a > p {
      margin: 3rem 12rem;
      width: 40%;
    }
  }

  #link:hover {
    opacity: 0.7;
  }
`;

export default List;
