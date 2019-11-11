import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaUserCircle, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton } from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: '',
      password: '',
    };
  }

  handleInputChange = e => {
    if (e.target.type === 'email') {
      this.setState({ email: e.target.value });
    } else {
      this.setState({ password: e.target.value });
    }
  };

  handleSubmit = async e => {
    const { history } = this.props;

    e.preventDefault();

    this.setState({ loading: true });

    const { email, password } = this.state;

    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('token', token);

      this.setState({
        loading: false,
      });

      history.push('/dashboard');
    } catch (err) {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { loading, email, password } = this.state;

    return (
      <Container>
        <h1>
          <FaUserCircle />
          Login de Usuários
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            required
            onChange={this.handleInputChange}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            required
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading} email={email} password={password}>
            {loading ? <FaSpinner color="#FFF" size={16} /> : <p>Entrar</p>}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
};
