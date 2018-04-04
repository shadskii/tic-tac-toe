import React from 'react';
import * as Actions from '../actions';
import Tile from '../components/Tile';
import { O, X, NONE } from '../constants/Values';


const Board = ({ board, updateFunc }) => (
    <div className='container content-scroll'>
        <table className='table-bordered' style={{ width: '100%', height: '100%' }}>
            <tbody>
                {tablerows(board, updateFunc)}
            </tbody>
        </table>
    </div>
);
function tablerows(board, updateFunc) {
    console.log(board);
    return board.map((rows, rowIndex) => {
        var row = rows.map((cell, colIndex) =>
            <td className='text-center'>
                <Tile
                    key={rowIndex + ' ' + colIndex}
                    value={cell}
                    updateFunc={() => updateFunc(rowIndex, colIndex, X)}
                />
            </td>
        );
        return <tr>{row}</tr>;
    });
}
export default Board;