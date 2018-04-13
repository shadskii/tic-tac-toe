import React from 'react';
import * as Actions from '../actions';
import Tile from '../components/Tile';
import { O, X, NONE } from '../constants/Values';
import '../styles/Board.css';
import PlayerBanner from '../components/PlayerBanner';

const Board = ({ board, player, updateFunc }) => (
    <div className='container content-scroll'>
        <PlayerBanner
            player={player}
        />
        <table className='' style={{ width: '100%', height: '100%' }}>
            <tbody>
                <tr>
                    {cell(0, player, board, updateFunc)}
                    {cell(1, player, board, updateFunc)}
                    {cell(2, player, board, updateFunc)}
                </tr>
                <tr>
                    {cell(3, player, board, updateFunc)}
                    {cell(4, player, board, updateFunc)}
                    {cell(5, player, board, updateFunc)}
                </tr>
                <tr>
                    {cell(6, player, board, updateFunc)}
                    {cell(7, player, board, updateFunc)}
                    {cell(8, player, board, updateFunc)}
                </tr>
            </tbody>
        </table>
    </div>
);

function cell(index, player, board, updateFunc, changePlayer) {
    return (
        <td className='table-center'>
            <Tile
                value={board[index].value}
                updateFunc={() => updateFunc(index, player)}
            />
        </td>
    );
}
export default Board;