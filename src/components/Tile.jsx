import React from 'react';
import PropTypes from 'prop-types'
import * as Values from '../constants/Values';

const Tile = ({ updateFunc, value }) => (
    <div onClick={() => updateFunc()}>
        {value == Values.NONE ?
            <h1>   3</h1>
            :
            <h1>{value}</h1>
        }
    </div>
);
export default Tile;