import React from 'react';
import PropTypes from 'prop-types'
import * as Values from '../constants/Values';
import '../styles/Tile.css';

const Tile = ({ value, updateFunc }) => {
    return (
        <div className='tile' onClick={() => updateFunc()}>
            {value === Values.NONE ?
                <p></p>
                :
                <p>{value === Values.X ? 'X' : 'O'}</p>
            }

        </div>
    );
}

Tile.propTypes = {
    value: PropTypes.number.isRequired,
    updateFunc: PropTypes.func.isRequired
}
export default Tile;