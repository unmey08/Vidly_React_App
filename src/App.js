import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Navbar from './components/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/movies" component={Movies} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
