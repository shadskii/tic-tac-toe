import React from 'react';
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { O, X, NONE } from '../constants/Values';

const WinningDialog = ({ resetGame, winner }) => (
    <Dialog
        title={getWinnerName(winner)}
        actions={
            <FlatButton
                label="Play Again"
                primary={true}
                onClick={() => resetGame()}
            />
        }
        modal={true}
        open={winner !== NONE}
    />
);
function getWinnerName(winner) {
    if (winner === O) {
        return "Player O has won!";
    } else if (winner === X) {
        return 'Player X has won!';
    } else {
        return "No one has won!"
    }
}

WinningDialog.propTypes = {
    resetGame: PropTypes.func.isRequired,
    winner: PropTypes.number.isRequired
}
export default WinningDialog;