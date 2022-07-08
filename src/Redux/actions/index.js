export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const RIGHT_ANSWER = 'RIGHT_ANSWER';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const RESTART_QUESTIONS = 'RESTART_QUESTIONS';

export function logInSucces(userData) {
  return {
    type: LOG_IN_SUCCESS,
    payload: userData,
  };
}

export function rightAnswer(points) {
  return {
    type: RIGHT_ANSWER,
    payload: points,
  };
}

export function nextQuestion() {
  return {
    type: NEXT_QUESTION,
  };
}

export function restartQuestions() {
  return {
    type: RESTART_QUESTIONS,
  };
}
