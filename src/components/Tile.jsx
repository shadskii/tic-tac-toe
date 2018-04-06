import React from 'react';
import PropTypes from 'prop-types'
import * as Values from '../constants/Values';

class Tile extends React.Component {

    render() {
        console.log(this.props.value);
        let val = this.props;
        return (
            <div onClick={() => this.props.updateFunc()}>
                {this.props.value === Values.NONE ?
                    <h1>---------</h1>
                    :
                    <h1>{this.props.value}</h1>
                }

            </div>
        );
    }
}
export default Tile;