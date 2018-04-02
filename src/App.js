import React, { Component } from 'react';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import Board from './containers/Board'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <AppBar
          title={'Tic Tac Toe'}
          showMenuIconButton={false}
          style={{ position: 'fixed' }}
        />
        <Board />
      </div>
    );
  }
}

export default App;
