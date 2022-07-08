import React, { useReducer } from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux'

export const MOCK_DATA = {
  player: {
    gravatarEmail: 'igor@email',
    name: 'Igor',
    score: 50,
    assertions: 4,
    question: 0,
    answers: [],
    }
};

describe('Testando página de feedbacks', () => {
  test('Contém nome do Usuário, Email, Score, Mensagem', () => {
    const render = renderWithRouterAndRedux(<App />, MOCK_DATA, '/feedback');

    console.log(render.store.getState())
    
    const name = screen.getByText(/igor/i)
    expect(name).toBeInTheDocument()

    const hasText = screen.getAllByText(/50/i);
    expect(hasText[0]).toBeInTheDocument()

    const msg = screen.getByText(/well done!/i)
    expect(msg).toBeInTheDocument()
  })

  test('verifica se os botões estão presentes "Ranking" e "Play Again"', () => {
    renderWithRouterAndRedux(<App />, MOCK_DATA, '/feedback');

    const playAgain = screen.getByRole('button', {
      name: /play again/i
    })

    expect(playAgain).toBeInTheDocument()

    const ranking = screen.getByRole('button', {
      name: /ranking/i
    })

    expect(ranking).toBeInTheDocument()
  })
})