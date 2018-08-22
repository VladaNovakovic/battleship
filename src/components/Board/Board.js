import React, { Component } from "react";
import PropTypes from 'prop-types';
import Field from '../Field/Field'
import './_board.scss';

class Board extends Component {
    static propTypes = {
        mySubmarines: PropTypes.array,
        hitSubmarines: PropTypes.array,
        missedShots: PropTypes.array,
        onFieldClick: PropTypes.func,
    };

    /**
     * React: defaultProps
     */
    static defaultProps = {
        mySubmarines: [],
        hitSubmarines: [],
        missedShots: [],
    };

    render() {
        let columns = ['a', 'b', 'c', 'd', 'e'];
        let rows = [1, 2, 3, 4, 5];
        let fields = [];
        let mySubmarines = this.props.mySubmarines.join();
        let hitSubmarines = this.props.hitSubmarines.join();
        let missedShots = this.props.missedShots.join();

        for(let row of rows) {
            for(let column of columns) {
                let fieldId = `${column}${row}`;
                let isMyField = mySubmarines.indexOf(fieldId) >= 0;
                let isHitField = hitSubmarines.indexOf(fieldId) >= 0;
                let isMissedShots = missedShots.indexOf(fieldId) >= 0;

                fields.push(
                    <Field key={fieldId}
                           row={row}
                           column={column}
                           onClick={this.props.onFieldClick}
                           isHit={isHitField}
                           isMySubmarine={isMyField}
                           isMiss={isMissedShots}/>
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