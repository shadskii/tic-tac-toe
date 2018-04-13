import React from 'react';
import PropTypes from 'prop-types';
import { O } from '../constants/Values';

const PlayerBanner = ({ player }) => (
    <h1>Player {getPlayerName(player)}'s turn!</h1>
)
function getPlayerName(player) {
    if (player === O) {
        return 'O';
    } else {
        return 'X';
    }
}
PlayerBanner.propTypes = {
    player: PropTypes.number.isRequired
}
export default PlayerBanner;