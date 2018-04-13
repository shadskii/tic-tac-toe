import * as types from '../constants/ActionTypes'
import { O, X, NONE, NO_WINNER } from '../constants/Values';

const initialState = {
    tiles: [
        { i: 0, value: NONE },
        { i: 1, value: NONE },
        { i: 2, value: NONE },
        { i: 3, value: NONE },
        { i: 4, value: NONE },
        { i: 5, value: NONE },
        { i: 6, value: NONE },
        { i: 7, value: NONE },
        { i: 8, value: NONE }
    ],
    winner: NONE,
    player: X
};
export default function game(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_TILE:
            let isUpdated = false;
            let t = state.tiles.map(tile => {
                if (tile.i === action.index && tile.value === NONE) {
                    isUpdated = true;
                    return {
                        i: tile.i,
                        value: action.value
                    }
                }
                return tile;
            });
            let p = state.player;
            if (isUpdated) {
                if (state.player === O) {
                    p = X;
                } else {
                    p = O;
                }
            }
            var win = whoWon(t);
            return {
                tiles: t,
                winner: win,
                player: p
            }

        case types.RESET_GAME:
            console.log(initialState);
            return initialState;
        default:
            return state;
    }
}

function whoWon(tiles) {

    var row = checkRows(tiles);
    if (row !== NONE) {
        return row;
    }

    var col = checkColumns(tiles);
    if (col !== NONE) {
        return col;
    }

    var diagonalLtoR = tiles[0].value + tiles[4].value + tiles[8].value;
    if (diagonalLtoR === 0) {
        return O;
    } else if (diagonalLtoR === 3) {
        return X;
    }

    var diagonalRtoL = tiles[2].value + tiles[4].value + tiles[6].value;
    if (diagonalRtoL === 0) {
        return O;
    } else if (diagonalRtoL === 3) {
        return X;
    }

    var noneCount = 0;
    for (var i = 0; i < tiles.length; i++) {
        if (tiles[i].value === NONE) {
            noneCount++;
        }
    }
    if (noneCount === 0) {
        return NO_WINNER;
    }

    return NONE;
}

function checkRows(tiles) {
    for (var row = 0; row <= 6; row += 3) {
        var sum = 0;
        for (var col = 0; col < 3; col++) {
            sum += tiles[row + col].value;
        }
        if (sum === 0) {
            return O;
        } else if (sum === 3) {
            return X;
        }
    }
    return NONE;
}

function checkColumns(tiles) {
    for (var col = 0; col < 3; col++) {
        var sum = 0;
        for (var row = 0; row <= 6; row += 3) {
            sum += tiles[row + col].value;
        }
        if (sum === 0) {
            return O;
        } else if (sum === 3) {
            return X;
        }
    }
    return NONE;
}