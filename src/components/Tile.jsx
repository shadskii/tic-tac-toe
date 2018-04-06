import React from 'react';
import PropTypes from 'prop-types'
import * as Values from '../constants/Values';
import '../styles/Tile.css';

class Tile extends React.Component {

    render() {
        let val = this.props;
        return (
            <div className='tile' onClick={() => this.props.updateFunc()}>
                {this.props.value === Values.NONE ?
                    <h1></h1>
                    :
                    <p>{this.props.value}</p>
                }

            </div>
        );
    }
}
export default Tile;