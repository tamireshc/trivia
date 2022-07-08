import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../trivia.png';
import { logInSucces, restartQuestions } from '../Redux/actions';

const MINIMUN_LENTGH = 3;

class Login extends React.Component {
  state = {
    name: '',
    email: '',
    isDisabled: true,
  }

  checkInputs = () => {
    const { name, email } = this.state;
    if (name.length >= MINIMUN_LENTGH && email.length >= MINIMUN_LENTGH
       && email.includes('@')) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  onInputChange = ({ target }) => this.setState({ [target.name]: target.value },
    this.checkInputs);

  startGame = async () => {
    const tokenResponse = await fetch('https://opentdb.com/api_token.php?command=request');
    const { token } = await tokenResponse.json();
    console.log('teste');
    localStorage.setItem('token', token);
    const { history, dispatch } = this.props;
    const { name, email } = this.state;
    dispatch(restartQuestions())
    dispatch(logInSucces({ name, email }));
    history.push('/game');
  }

  render() {
    const { name, email, isDisabled } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <label htmlFor="input-player-name">
            <input
              value={ name }
              name="name"
              id="input-player-name"
              type="text"
              data-testid="input-player-name"
              onChange={ this.onInputChange }
              placeholder="Nome"
            />
          </label>
          <label htmlFor="input-player-email">
            <input
              value={ email }
              name="email"
              id="input-player-email"
              type="text"
              data-testid="input-gravatar-email"
              onChange={ this.onInputChange }
              placeholder="Email"
            />
          </label>
          <div className="button-login-container">
            <button
              type="button"
              data-testid="btn-play"
              disabled={ isDisabled }
              onClick={ this.startGame }
            >
              Play
            </button>
            <Link to="/configuracao">
              <button
                type="button"
                data-testid="btn-settings"
              >
                Configurações
              </button>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default connect()(Login);
