import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './containers/Header/Header';
import Dashboard from './containers/Dashboard/Dashboard';
import NowPlaying from './containers/NowPlaying/NowPlaying';
import MovieDetails from './containers/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/nowplaying" component={NowPlaying} />
        <Route exact path="/movie/:id" component={MovieDetails} />
      </Router>
    </div>
  );
}

export default App;
