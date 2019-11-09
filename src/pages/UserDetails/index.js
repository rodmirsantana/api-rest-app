import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import Header from '../../components/Header';
import List from '../../components/List';

import { UserInfo, UserName, Email } from './styles';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;

    const { id } = match.params;

    const jsonUser = localStorage.getItem('users');

    const users = JSON.parse(jsonUser);

    const user = users.find(u => u.id === Number(id));

    if (user) {
      this.setState({ user });
    }
  }

  clearSelectedUSer = () => {
    localStorage.removeItem('selectedUser');
  };

  render() {
    const { user } = this.state;

    return (
      <Container>
        <Header>
          <Link onClick={this.clearSelectedUSer} to="/dashboard">
            <p>Voltar a página de usuários</p>
          </Link>
        </Header>

        <List>
          <li>
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
          </li>
        </List>
      </Container>
    );
  }
}

UserDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
