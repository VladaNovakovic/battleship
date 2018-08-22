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
            <Board mySubmarines={this.props.submarines} onFieldClick={this.onFieldClick}/>
        );
    }

    onFieldClick = () => {
        console.log('my submarines click');
    };
}

export default MyBoard;