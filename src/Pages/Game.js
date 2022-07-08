import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import MultipleChoices from '../Components/MutipleChoices';

const RESPONSE_CODE_3 = 3;

class Game extends React.Component {
  state = {
    response: [],
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = async () => {
    const { history } = this.props;
    const token = localStorage.getItem('token');
    const fetchResponse = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    console.log(fetchResponse);
    const responseJson = await fetchResponse.json();
    if (responseJson.response_code === 0) {
      this.setState({ response: responseJson.results });
    } else if (responseJson.response_code === RESPONSE_CODE_3) {
      localStorage.setItem('token', '');
      history.push('/');
    }
  }

  render() {
    const { response } = this.state;
    const { questionIndex, history } = this.props;
    return (
      <div>
        <Header />
        {response?.length > 0 && (
          <MultipleChoices
            difficulty={ response[questionIndex].difficulty }
            question={ response[questionIndex].question }
            category={ response[questionIndex].category }
            correctAnswer={ response[questionIndex].correct_answer }
            incorrectAnswers={ response[questionIndex].incorrect_answers }
            type={ response[questionIndex].type }
            questionIndex={ questionIndex }
            history={ history }
          />
        )}
        {/* {question == 1} */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  questionIndex: state.player.question,
});

Game.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps)(Game);
