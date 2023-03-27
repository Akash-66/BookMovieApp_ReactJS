import React, { Component } from 'react';
import Home from '../screens/home/Home';
import Details from '../screens/details/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookShow from '../screens/bookshow/BookShow';
import Confirmation from '../screens/confirmation/Confirmation';

class Controller extends Component {

  constructor() {
    super();
    //this.baseUrl = "https://akash-66.github.io/Movie-Api-dB/newdb.json";
    this.baseUrlNew = "http://localhost:8085/api/v1/";
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Home {...props}  baseUrl={this.baseUrlNew} />} />
          <Route path='/movie/:id' render={(props) => <Details {...props} baseUrl={this.baseUrlNew} />} />
          <Route path='/bookshow/:id' render={(props) => <BookShow {...props} baseUrl={this.baseUrlNew} />} />
          <Route path='/confirm/:id' render={(props) => <Confirmation {...props} baseUrl={this.baseUrlNew} />} />
        </div>
      </Router>
    )
  }
}

export default Controller;
