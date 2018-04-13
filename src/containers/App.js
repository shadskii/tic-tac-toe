import React from 'react';
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';
import Board from './Board';
import WinningDialog from '../components/WinningDialog';

import '../styles/App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';


const App = ({ tiles, winner, player, actions }) => (
  <div className="wrapper">
    <AppBar
      title={'Tic Tac Toe'}
      showMenuIconButton={false}
      style={{ position: 'fixed' }}
    />
    <WinningDialog
      resetGame={actions.resetGame}
      winner={winner}
    />
    <Board
      board={tiles}
      player={player}
      updateFunc={actions.selectTile}
    />
  </div>
);
App.propTypes = {
  tiles: PropTypes.array.isRequired,
  winner: PropTypes.number.isRequired,
  player: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  tiles: state.game.tiles,
  winner: state.game.winner,
  player: state.game.player
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
