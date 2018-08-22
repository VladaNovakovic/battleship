import React, { Component } from "react";
import PropTypes from 'prop-types';
import Board from '../Board/Board'
import './_my_board.scss';

class MyBoard extends Component {
    static propTypes = {
        submarines: PropTypes.array,
    };

    /**
     * React: defaultProps
     */
    static defaultProps = {
        submarines: [],
    };

    render() {
        return (
            <div className="battleship-c-my-board">
                <h2 className="battleship-c-my-board__headline">My submarines</h2>
                <Board mySubmarines={this.props.submarines} onFieldClick={this.onFieldClick}/>
            </div>
        );
    }

    onFieldClick = () => {
        console.log('my submarines click');
    };
}

export default MyBoard;