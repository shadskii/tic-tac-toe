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

Tile.propTypes = {
    value: PropTypes.number.isRequired,
    updateFunc: PropTypes.func.isRequired
}
export default Tile;