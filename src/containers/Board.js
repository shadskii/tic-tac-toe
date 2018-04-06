import React from 'react';
import * as Actions from '../actions';
import Tile from '../components/Tile';
import { O, X, NONE } from '../constants/Values';
import '../styles/Board.css';

const Board = ({ board, player, updateFunc }) => (
    <div className='container content-scroll'>
        <table className='' style={{ width: '100%', height: '100%' }}>
            <tbody>
                <tr>
                    <td className='teplayert-center'>
                        <Tile
                            value={board[0].value}
                            updateFunc={() => updateFunc(0, player)}
                        />
                    </td>
                    <td className='teplayert-center'>
                        <Tile
                            value={board[1].value}
                            updateFunc={() => updateFunc(1, player)}
                        />
                    </td>
                    <td className='teplayert-center'>
                        <Tile
                            value={board[2].value}
                            updateFunc={() => updateFunc(2, player)}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='teplayert-center'>
                        <Tile
                            value={board[3].value}
                            updateFunc={() => updateFunc(3, player)}
                        />
                    </td>
                    <td className='teplayert-center'>
                        <Tile
                            value={board[4].value}
                            updateFunc={() => updateFunc(4, player)}
                        />
                    </td>
                    <td className='teplayert-center'>
                        <Tile
                            value={board[5].value}
                            updateFunc={() => updateFunc(5, player)}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='teplayert-center'>
                        <Tile
                            value={board[6].value}
                            updateFunc={() => updateFunc(6, player)}
                        />
                    </td>
                    <td className='teplayert-center'>
                        <Tile
                            value={board[7].value}
                            updateFunc={() => updateFunc(7, player)}
                        />
                    </td>
                    <td className='teplayert-center'>
                        <Tile
                            value={board[8].value}
                            updateFunc={() => updateFunc(8, player)}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);
function tablerows(board, updateFunc) {
    console.log(board);
    return board.map((rows, rowIndeplayer) => {
        var row = rows.map((cell, colIndeplayer) =>
            <td className='teplayert-center'>
                <Tile
                    key={rowIndeplayer + ' ' + colIndeplayer}
                    value={cell}
                    updateFunc={() => updateFunc(rowIndeplayer, colIndeplayer, X)}
                />
            </td>
        );
        return <tr key={rowIndeplayer}>{row}</tr>;
    });
}
export default Board;