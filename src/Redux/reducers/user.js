import { LOG_IN_SUCCESS, RIGHT_ANSWER, NEXT_QUESTION,
  RESTART_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  gravatarEmail: '',
  name: '',
  score: 0,
  assertions: 0,
  question: 0,
  answers: [],
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOG_IN_SUCCESS:
    return {
      ...state,
      gravatarEmail: action.payload.email,
      name: action.payload.name,
    };
  case RIGHT_ANSWER:
    return {
      ...state,
      score: action.payload + state.score,
      assertions: state.assertions + 1,
    };
  case NEXT_QUESTION:
    return {
      ...state,
      question: state.question + 1,
    };
  case RESTART_QUESTIONS:
    return {
      ...state,
      question: 0,
      score: 0,
    };

  default:
    return state;
  }
};

export default loginReducer;
