import React from 'react';
import * as Actions from '../actions';
import Tile from '../components/Tile';
import { O, X, NONE } from '../constants/Values';


const Board = ({ board, updateFunc }) => (
    <div className='container content-scroll'>
        <table className='table-bordered' style={{ width: '100%', height: '100%' }}>
            <tbody>
                <tr>
                    <td className='text-center'>
                        <Tile
                            value={board[0].value}
                            updateFunc={() => updateFunc(0, X)}
                        />
                    </td>
                    <td className='text-center'>
                        <Tile
                            value={board[1].value}
                            updateFunc={() => updateFunc(1, X)}
                        />
                    </td>
                    <td className='text-center'>
                        <Tile
                            value={board[2].value}
                            updateFunc={() => updateFunc(2, X)}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='text-center'>
                        <Tile
                            value={board[3].value}
                            updateFunc={() => updateFunc(3, X)}
                        />
                    </td>
                    <td className='text-center'>
                        <Tile
                            value={board[4].value}
                            updateFunc={() => updateFunc(4, X)}
                        />
                    </td>
                    <td className='text-center'>
                        <Tile
                            value={board[5].value}
                            updateFunc={() => updateFunc(5, X)}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='text-center'>
                        <Tile
                            value={board[6].value}
                            updateFunc={() => updateFunc(6, X)}
                        />
                    </td>
                    <td className='text-center'>
                        <Tile
                            value={board[7].value}
                            updateFunc={() => updateFunc(7, X)}
                        />
                    </td>
                    <td className='text-center'>
                        <Tile
                            value={board[8].value}
                            updateFunc={() => updateFunc(8, X)}
                        />
                    </td>
                </tr>
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
        return <tr key={rowIndex}>{row}</tr>;
    });
}
export default Board;