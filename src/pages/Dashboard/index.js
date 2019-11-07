import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';
import { Header, List, UserName, Email, Button, Footer } from './styles';

export default class Dashboard extends Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      page: 1,
      loading: false,
    };
  }

  componentDidMount() {
    const isLoggedIn = localStorage.getItem('token');

    if (isLoggedIn) {
      this.loadUsers();
    }
  }

  loadNextPage = async e => {
    const { page } = this.state;

    e.preventDefault();

    this.setState({ loading: true, page: page + 1 });

    if (page > 2) {
      return;
    }

    this.loadUsers();

    this.setState({
      loading: false,
    });
  };

  loadPreviousPage = async e => {
    const { page } = this.state;

    console.log(page);

    e.preventDefault();

    if (page === 1) {
      return;
    }

    this.setState({ loading: true, page: page - 1 });

    this.loadUsers();

    this.setState({
      loading: false,
    });
  };

  loadUsers = async () => {
    const { page } = this.state;

    const response = await api.get(`/users?page=${String(page)}`);

    const { data: users } = response.data;

    this.setState({ users });
  };

  render() {
    const { users, loading } = this.state;

    return (
      <Container>
        <Header>
          <Link to="/">Voltar a página de Login</Link>
        </Header>

        <List>
          {users.map(user => (
            <li key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <UserName>
                <p>Nome:</p>
                <h1>
                  {user.first_name} {user.last_name}
                </h1>
              </UserName>
              <Email>
                <p>Email:</p>
                <p>{user.email}</p>
              </Email>
            </li>
          ))}
        </List>

        <Footer>
          <Button onClick={this.loadPreviousPage}>
            <p>Página anterior</p>
          </Button>
          <Button onClick={this.loadNextPage}>
            <p>Próxima página</p>
          </Button>
        </Footer>
      </Container>
    );
  }
}
