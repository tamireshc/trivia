import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  state = {
    sortedRank: [],
  }

  componentDidMount = () => {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    ranking.sort((a, b) => b.score - a.score);
    this.setState({ sortedRank: ranking });
  }

  render() {
    const { sortedRank } = this.state;
    return (
      <div>
        <p data-testid="ranking-title">Ranking</p>
        <section className="ranking-container">
          {sortedRank.length > 0 && (
            sortedRank.map(({ name, score, picture }, index) => (
              <div key={ picture } className="ranking-item">
                <p data-testid={ `player-score-${index}` } className="score-item">
                  {score}
                  {' '}
                </p>
                <p data-testid={ `player-name-${index}`} className="player-name-ranking">{name}</p>
                <img src={ picture } alt={ `Foto de ${name}` } />
              </div>
            ))
          )}
        </section>
        <div className="button-ranking-container">
          <Link to="/">
            <button type="button" data-testid="btn-go-home">Tela Inicial</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Ranking;
