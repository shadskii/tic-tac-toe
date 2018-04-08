import * as types from '../constants/ActionTypes'
export const selectTile = (index, value) => ({
    type: types.UPDATE_TILE,
    index: index,
    value: value
})

export const changePlayer = () => ({
    type: types.CHANGE_PLAYER,
});