import React from 'react';
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { O, X, NONE } from '../constants/Values';

const WinningDialog = ({ resetGame, winner }) => (
    <Dialog
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

export default WinningDialog;