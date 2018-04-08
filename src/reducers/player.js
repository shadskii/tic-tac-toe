import * as types from '../constants/ActionTypes'
import { O, X, NONE } from '../constants/Values';

export default function player(state = O, action) {
    switch (action.type) {
        case types.CHANGE_PLAYER:
            if (state === O) {
                return X;
            } else {
                return O;
            }
        default:
            return state;
    }
}