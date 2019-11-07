import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #385898;
    margin-bottom: 10px;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #388898;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #385898;
      font-size: 16px;
      text-decoration: none;
    }
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin: 10px 15px;
  }

  h1 {
    font-size: 20px;
    margin: 5px;
  }

  p {
    margin: 15px 10px;
    font-size: 14px;
    color: #444;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const UserName = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 20px;
    margin: 5px;
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    margin: 5px 10px;
  }
`;

export const Button = styled.button`
  background: #385898;
  width: 40%;
  border: 0;
  padding: 10px 15px;
  margin: 20px;
  border-radius: 10px;

  p {
    font-weight: 600;
    font-size: 16px;
    color: #fff;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    color: #385898;
    margin-top: 10px;
    font-size: 16px;
    text-decoration: none;
  }
`;
