import React, { Component } from "react";
import PropTypes from 'prop-types';
import Field from '../Field/Field'
import './_board.scss';

class Board extends Component {
    static propTypes = {
        activeSubmarines: PropTypes.array,
        hiddenSubmarines: PropTypes.array,
    };

    /**
     * React: defaultProps
     */
    static defaultProps = {
        activeSubmarines: [],
        hiddenSubmarines: [],
    };

    render() {
        let columns = ['a', 'b', 'c', 'd', 'e'];
        let rows = [1, 2, 3, 4, 5];
        let fields = [];
        let activeSubmarines = this.props.activeSubmarines.join();
        let hiddenSubmarines = this.props.hiddenSubmarines.join();

        for(let row of rows) {
            for(let column of columns) {
                let fieldId = `${column}${row}`;
                let isActiveField = activeSubmarines.indexOf(fieldId) >= 0;
                let isHiddenField = hiddenSubmarines.indexOf(fieldId) >= 0;
                fields.push(
                    <Field key={fieldId} row={row} column={column} isActive={isActiveField} isHidden={isHiddenField}/>
                );
            }
        }

        return (
            <div className="battleship-c-board">
                {fields}
            </div>

        );
    }
}

export default Board;