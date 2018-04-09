import React from 'react';
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { O, X, NONE } from '../constants/Values';

const WinningDialog = ({ resetGame, winner }) => (
    <Dialog
        title={"Player " + getWinnerName(winner) + " has won!"}
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
        return 'O';
    } else {
        return 'X';
    }
}

export default WinningDialog;