import * as types from '../constants/ActionTypes'
import { O, X, NONE } from '../constants/Values';

const initialState = [
    { i: 0, value: NONE },
    { i: 1, value: NONE },
    { i: 2, value: NONE },
    { i: 3, value: NONE },
    { i: 4, value: NONE },
    { i: 5, value: NONE },
    { i: 6, value: NONE },
    { i: 7, value: NONE },
    { i: 8, value: NONE }
];
export default function tiles(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_TILE:
            return state.map(tile => {
                if (tile.i === action.index && tile.value === NONE) {
                    return {
                        i: tile.i,
                        value: action.value
                    }
                }
                return tile;
            });
        default:
            return state;
    }
}
