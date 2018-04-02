import * as types from '../constants/ActionTypes'
import { O, X, NONE } from '../constants/Values';

const initialState = [
    [NONE, NONE, NONE],
    [NONE, NONE, NONE],
    [NONE, NONE, NONE]
];
export default function tiles(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_TILE:
            state[action.x][action.y] = action.value;
            return state;
        default:
            return state;
    }
}
