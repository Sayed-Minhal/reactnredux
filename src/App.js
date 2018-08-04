import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from "./store";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


import Posts from './components/posts';


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <div className="App">
        <Posts/>
      </div>
      </Provider>
    );
  }
}

export default App;
