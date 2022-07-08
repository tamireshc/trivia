import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Configuracao from './Pages/Configuracao';
import Game from './Pages/Game';
import Feedback from './Pages/Feedback';
import Ranking from './Pages/Ranking';

export default function App() {
  return (
    <Switch>
      <Route exact path="/feedback" component={ Feedback } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/configuracao" component={ Configuracao } />
      <Route exact path="/" component={ Login } />
      <Route exact path="/ranking" component={ Ranking } />
    </Switch>
  );
}
