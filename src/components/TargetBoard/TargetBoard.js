import React, { Component } from "react";
import PropTypes from 'prop-types';
import Board from '../Board/Board'
import './_target_board.scss';

class TargetBoard extends Component {
    static propTypes = {
        hitSubmarines: PropTypes.array,
        missedShots: PropTypes.array,
    };

    /**
     * React: defaultProps
     */
    static defaultProps = {
        submarines: [],
    };

    render() {
        return (
            <div className="battleship-c-target-board">
                <h2 className="battleship-c-target-board__headline">Target board</h2>
                <Board hitSubmarines={this.props.hitSubmarines}
                       missedShots={this.props.missedShots}
                       onFieldClick={this.onFieldClick}/>
            </div>
        );
    }

    onFieldClick = () => {
        console.log('target field click');
    };
}

export default TargetBoard;