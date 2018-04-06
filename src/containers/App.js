import React, { Component } from 'react';
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';
import Board from './Board'
import '../styles/App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';


const App = ({ boardTiles, actions }) => (
  <div className="wrapper">
    <AppBar
      title={'Tic Tac Toe'}
      showMenuIconButton={false}
      style={{ position: 'fixed' }}
    />
    <Board
      board={boardTiles}
      updateFunc={actions.selectTile}
    />
  </div>
);
App.propTypes = {
  boardTiles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  boardTiles: state.tiles
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
