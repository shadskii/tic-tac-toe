import React, { Component } from 'react';
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';
import Board from './Board'
import '../styles/App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';


const App = ({ game, player, actions }) => (
  <div className="wrapper">
    <AppBar
      title={'Tic Tac Toe'}
      showMenuIconButton={false}
      style={{ position: 'fixed' }}
    />
    <Board
      board={game.tiles}
      player={player}
      updateFunc={actions.selectTile}
      changePlayer={actions.changePlayer}
    />
  </div>
);
App.propTypes = {
  game: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  game: state.tiles,
  player: state.player
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
