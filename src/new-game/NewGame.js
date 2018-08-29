import React, {Component} from 'react';
import {Board} from '../ui-elements';
import './NewGame.scss';
/* eslint-disable */

class NewGame extends Component {
    /**
     *
     * React: state
     */
    state = {
        singleBlock: [],
        dualBlock: [],
        tripleBlock: [],
        quatreBlock: [],
    };

    updateBlock = (event, blockNumber = 0, submarineSize = 1) => {
        console.log(blockNumber, submarineSize, event);
    };

    render() {
        const submarines = [this.state.singleBlock, this.state.dualBlock, this.state.tripleBlock, this.state.quatreBlock];
        return (
            <div className="battleship-c-new-game something" key={1}>
                <h1>New Game</h1>
                <div className="battleship-c-new-game__row">
                    <label className="battleship-c-new-game__label">1 block submarine</label>
                    <input className="battleship-c-new-game__input" onChange={this.updateBlock} />
                </div>

                <div className="battleship-c-new-game__row">
                    <label className="battleship-c-new-game__label">2 block submarine</label>
                    <input className="battleship-c-new-game__input" />
                    <input className="battleship-c-new-game__input" />
                </div>

                <div className="battleship-c-new-game__row">
                    <label className="battleship-c-new-game__label">3 block submarine</label>
                    <input className="battleship-c-new-game__input" />
                    <input className="battleship-c-new-game__input" />
                    <input className="battleship-c-new-game__input" />
                </div>

                <div className="battleship-c-new-game__row">
                    <label className="battleship-c-new-game__label">4 block submarine</label>
                    <input className="battleship-c-new-game__input" />
                    <input className="battleship-c-new-game__input" />
                    <input className="battleship-c-new-game__input" />
                    <input className="battleship-c-new-game__input" />
                </div>

                <div className="battleship-c-new-game-board">
                    <Board mySubmarines={submarines} />
                </div>
            </div>
        );
    }
}

export default NewGame;
