import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Field from '../Field/Field';
import './Board.scss';

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
        onFieldClick: () => {},
    };

    onFieldClick = () => {
        this.props.onFieldClick();
    };

    render() {
        const columns = ['a', 'b', 'c', 'd', 'e'];
        const rows = [1, 2, 3, 4, 5];
        const fields = [];
        const mySubmarines = this.props.mySubmarines.join();
        const hitSubmarines = this.props.hitSubmarines.join();
        const missedShots = this.props.missedShots.join();

        for (const row of rows) {
            for (const column of columns) {
                const fieldId = `${column}${row}`;
                const isMyField = mySubmarines.indexOf(fieldId) >= 0;
                const isHitField = hitSubmarines.indexOf(fieldId) >= 0;
                const isMissedShots = missedShots.indexOf(fieldId) >= 0;

                fields.push(
                    <Field
                        key={fieldId}
                        row={row}
                        column={column}
                        onClick={this.onFieldClick}
                        isHit={isHitField}
                        isMySubmarine={isMyField}
                        isMiss={isMissedShots}
                    />
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
