import React, { Component } from "react";
import Field from '../Field/Field'
import './_board.scss';

class Board extends Component {
    render() {
        let rows = ['a', 'b', 'c', 'd', 'e'];
        let columns = [1, 2, 3, 4, 5];
        let fields = [];

        for(let row of rows) {
            for(let column of columns) {
                fields.push(<Field key={`${row}${column}`} row={row} column={column}/>)
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