import React from 'react';
import * as Actions from '../actions';
import Tile from '../components/Tile';
import { O, X, NONE } from '../constants/Values';
import '../styles/Board.css';

const Board = ({ board, player, updateFunc, changePlayer }) => (
    <div className='container content-scroll'>
        <table className='' style={{ width: '100%', height: '100%' }}>
            <tbody>
                <tr>
                    {cell(0, player, board, updateFunc, changePlayer)}
                    {cell(1, player, board, updateFunc, changePlayer)}
                    {cell(2, player, board, updateFunc, changePlayer)}
                </tr>
                <tr>
                    {cell(3, player, board, updateFunc, changePlayer)}
                    {cell(4, player, board, updateFunc, changePlayer)}
                    {cell(5, player, board, updateFunc, changePlayer)}
                </tr>
                <tr>
                    {cell(6, player, board, updateFunc, changePlayer)}
                    {cell(7, player, board, updateFunc, changePlayer)}
                    {cell(8, player, board, updateFunc, changePlayer)}
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
                updateFunc={() => {
                    updateFunc(index, player);
                    changePlayer();
                }}
            />
        </td>
    );
}
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