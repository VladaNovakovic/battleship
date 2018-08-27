import React, {Component} from 'react';
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
        return (
            <div className="battleship-c-new-game" key={1}>
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
            </div>
        );
    }
}

export default NewGame;
