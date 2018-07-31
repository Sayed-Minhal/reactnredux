import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


import Posts from './components/posts';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Posts/>
      </div>
    );
  }
}

export default App;
