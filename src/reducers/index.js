import { combineReducers } from 'redux'
import tiles from './tiles';
import player from './player';

const rootReducer = combineReducers({
    tiles,
    player
});

export default rootReducer;