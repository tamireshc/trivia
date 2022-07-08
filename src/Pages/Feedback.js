import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const ASSERTION3 = 3;

class Feedback extends React.Component {
  state = {
    feedbackMsg: '',
  }

  componentDidMount() {
    this.checkAssertions();
  }

  checkAssertions = () => {
    const { assertions } = this.props;
    if (assertions < ASSERTION3) {
      this.setState({ feedbackMsg: 'Could be better...' });
    } else {
      this.setState({ feedbackMsg: 'Well Done!' });
    }
  }

  render() {
    const { feedbackMsg } = this.state;
    const { score, assertions } = this.props;
    return (
      <div>
        <Header />
        <section className="feedback-container">
          {feedbackMsg && <p data-testid="feedback-text">{feedbackMsg}</p>}
          <p data-testid="feedback-total-score">
            Score:
            {' '}
            {score}
          </p>
          <p data-testid="feedback-total-question">
            Acertos:
            {' '}
            {assertions}
          </p>
          <Link to="/">
            <button
              type="button"
              data-testid="btn-play-again"
            >
              Play Again
            </button>
          </Link>
          <Link to="/ranking">
            <button
              type="button"
              data-testid="btn-ranking"

            >
              Ranking
            </button>
          </Link>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  gravatarEmail: globalState.player.gravatarEmail,
  name: globalState.player.name,
  score: globalState.player.score,
  assertions: globalState.player.assertions,
});

Feedback.propTypes = {
  gravatarEmail: PropTypes.string,
  name: PropTypes.string,
  player: PropTypes.number,
  assertions: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
