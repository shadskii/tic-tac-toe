import * as types from '../constants/ActionTypes'
export const selectTile = (x, y, value) => ({
    type: types.UPDATE_TILE,
    x: x,
    y: y,
    value: value
})