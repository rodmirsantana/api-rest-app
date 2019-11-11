import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';
import Header from '../../components/Header';
import List from '../../components/List';
import { UserInfo, UserName, Email, Button, Footer } from './styles';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      page: 1,
      totalPages: 0,
    };
  }

  componentDidMount() {
    const isLoggedIn = localStorage.getItem('token');

    if (isLoggedIn) {
      this.loadUsers();
    }
  }

  loadNextPage = () => {
    const { page, totalPages } = this.state;

    if (page === totalPages) return;

    const pageNumber = page + 1;

    this.loadUsers(pageNumber);
  };

  loadPreviousPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadUsers(pageNumber);
  };

  loadUsers = async (page = 1) => {
    const response = await api.get(`/users?page=${page}`);

    const { data, total_pages: totalPages } = response.data;

    const jsonUsers = JSON.stringify(data);

    localStorage.setItem('users', jsonUsers);

    this.setState({ users: data, totalPages, page });
  };

  clearSession = () => {
    localStorage.clear();
  };

  render() {
    const { users, page, totalPages } = this.state;

    return (
      <Container>
        <Header>
          <Link onClick={this.clearSession} to="/">
            <p>Voltar a página de Login</p>
          </Link>
        </Header>

        <List>
          {users.map(user => (
            <li key={user.id}>
              <UserInfo>
                <img src={user.avatar} alt={user.first_name} />
                <UserName>
                  <p>Nome:</p>
                  <h1>
                    {user.first_name} {user.last_name}
                  </h1>
                </UserName>
                <Email>
                  <p>Email:</p>
                  <h1>{user.email}</h1>
                </Email>
              </UserInfo>

              <Link to={`/user/${user.id}`}>
                <p id="link">Ver Detalhes</p>
              </Link>
            </li>
          ))}
        </List>

        <Footer>
          <Button disabled={page === 1} onClick={this.loadPreviousPage}>
            <p>Página anterior</p>
          </Button>
          <Button disabled={page === totalPages} onClick={this.loadNextPage}>
            <p>Próxima página</p>
          </Button>
        </Footer>
      </Container>
    );
  }
}
