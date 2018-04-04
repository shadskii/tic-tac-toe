import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Board from './Board'
import '../styles/App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';


const App = ({ board, actions }) => (
  <div className="wrapper">
    <AppBar
      title={'Tic Tac Toe'}
      showMenuIconButton={false}
      style={{ position: 'fixed' }}
    />
    <Board
      board={board}
      updateFunc={actions.selectTile}
    />
  </div>
);


const mapStateToProps = state => ({
  board: state.tiles
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
