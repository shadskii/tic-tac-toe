import React from 'react';
import * as Actions from '../actions';
import Tile from '../components/Tile';
import { O, X, NONE } from '../constants/Values';

let board = [
    [NONE, NONE, NONE],
    [NONE, NONE, NONE],
    [NONE, NONE, NONE]
]

const Board = ({ size, actions }) => (
    <div className='container content-scroll'>
        <table className='table-bordered' style={{ width: '100%', height: '100%' }}>
            <tbody>
                {tablerows(board)}
            </tbody>
        </table>
    </div>
);
function tablerows(board) {
    return board.map((rows, rowIndex) => {
        var row = rows.map((cell, colIndex) =>
            <td className='text-center'><Tile
                key={rowIndex + ' ' + colIndex}
                value={cell}
            /></td>
        );
        return <tr>{row}</tr>;
    });
}
export default Board;