import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './containers/Header/Header';
import Dashboard from './containers/Dashboard/Dashboard';
import NowPlaying from './containers/NowPlaying/NowPlaying';
import MovieDetails from './containers/MovieDetails/MovieDetails';
import MovieSearch from './containers/MovieSearch/MovieSearch';
import Upcoming from './containers/Upcoming/Upcoming';
import Genres from './containers/Genres/Genres';
import GenresList from './containers/Genres/GenresList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/search" component={MovieSearch} />
          <Route exact path="/nowplaying" component={NowPlaying} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/genres" component={Genres} />

          <Route
            exact
            path="/genres/:genreName/:genreId"
            component={GenresList}
          />
          <Route exact path="/movie/:id" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
