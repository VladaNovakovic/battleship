import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Board from '../../ui-elements/Board/Board';
import './MyBoard.scss';

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

    onFieldClick = () => {
        // console.log('my submarines click');
    };

    render() {
        return (
            <div className="battleship-c-my-board">
                <h2 className="battleship-c-my-board__headline">My submarines</h2>
                <Board
                    mySubmarines={this.props.submarines}
                    onFieldClick={this.onFieldClick}
                />
            </div>
        );
    }
}

export default MyBoard;
