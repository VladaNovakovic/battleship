import React, { Component } from "react";
import PropTypes from 'prop-types';
import './_field.scss';

class Field extends Component {
    static propTypes = {
        row: PropTypes.string,
        column: PropTypes.number,
    };

    render() {
        return (
            <div className="battleship-c-field">{this.props.row}{this.props.column}</div>
        );
    }
}

export default Field;