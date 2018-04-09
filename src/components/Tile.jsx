import React from 'react';
import PropTypes from 'prop-types'
import * as Values from '../constants/Values';
import '../styles/Tile.css';

const Tile = ({ value, updateFunc }) => {
    let val = this.props;
    return (
        <div className='tile' onClick={() => updateFunc()}>
            {value === Values.NONE ?
                <h1></h1>
                :
                <p>{value === Values.X ? 'X' : 'O'}</p>
            }

        </div>
    );
}
export default Tile;