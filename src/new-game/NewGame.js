import React, {Component} from 'react';
import {Board} from '../ui-elements';
import './NewGame.scss';
/* eslint-disable no-console */

class NewGame extends Component {
    /**
     *
     * React: state
     */
    state = {
        singleBlock: ['a1'],
        dualBlock: ['a2', 'b2'],
        tripleBlock: ['a3', 'b3', 'c3'],
        quatreBlock: ['a4', 'b4', 'c4', 'd4'],
    };

    rows = ['a', 'b', 'c', 'd', 'e'];

    updateBlock = (event, blockNumber = 0, block) => {
        const newState = {};
        newState[block] = this.state[block];
        newState[block][blockNumber] = event.target.value;

        this.setState(newState);
    };

    startGame = () => {
        console.log('validate submarines and start game');
        if (this.validateSubmarines()) {
            console.log('start game');
        } else {
            console.log('not valid');
        }
    };

    validateSubmarines = () => {
        console.log('validate submarines');
        console.log(this.validateSingleSubmarine(this.state.singleBlock));
        console.log(this.validateSingleSubmarine(this.state.dualBlock));
        console.log(this.validateSingleSubmarine(this.state.tripleBlock));
        console.log(this.validateSingleSubmarine(this.state.quatreBlock));

        return (Math.random() > 0.5);
    };

    validateSingleSubmarine =
            submarineFields => this.areSubmarineFieldsValid(submarineFields)
                && this.isSubmarineStreight(submarineFields);

    areSubmarineFieldsValid = submarineFields => submarineFields.reduce((accumulator, field) => {
        const coordinates = field.split('');
        return accumulator && this.rows.includes(coordinates[0]) && coordinates[1] <= 5;
    }, true);

    areSubmarineFieldsConnected = submarineFields => {
        console.log(submarineFields);
        return true;
    };

    isSubmarineStreight = submarineFields => {
        let inColumn = true;
        let inRow = true;
        const firstColumn = submarineFields[0].split('')[0];
        const firstRow = submarineFields[0].split('')[1];

        submarineFields.forEach(field => {
            const coordinates = field.split('');

            inColumn = inColumn && (firstColumn === coordinates[0]);
            inRow = inRow && (firstRow === coordinates[1]);
        });

        // console.log(inRow, inColumn);
        return inRow || inColumn;
    };

    render() {
        const submarines = [
            this.state.singleBlock,
            this.state.dualBlock,
            this.state.tripleBlock,
            this.state.quatreBlock,
        ];

        return (
            <div className="battleship-c-new-game" key={1}>
                <h1>New Game</h1>
                <div className="battleship-c-new-game__row">
                    <label className="battleship-c-new-game__label">1 block submarine</label>
                    <input
                        className="battleship-c-new-game__input"
                        value={this.state.singleBlock[0]}
                        onChange={event => this.updateBlock(event, 0, 'singleBlock')}
                    />
                </div>

                <div className="battleship-c-new-game__row">
                    <label className="battleship-c-new-game__label">2 block submarine</label>
                    <input
                        className="battleship-c-new-game__input"
                        value={this.state.dualBlock[0]}
                        onChange={event => this.updateBlock(event, 0, 'dualBlock')}
                    />
                    <input
                        className="battleship-c-new-game__input"
                        value={this.state.dualBlock[1]}
                        onChange={event => this.updateBlock(event, 1, 'dualBlock')}
                    />
                </div>

                <div className="battleship-c-new-game__row">
                    <label className="battleship-c-new-game__label">3 block submarine</label>
                    <input
                        className="battleship-c-new-game__input"
                        value={this.state.tripleBlock[0]}
                        onChange={event => this.updateBlock(event, 0, 'tripleBlock')}
                    />
                    <input
                        className="battleship-c-new-game__input"
                        value={this.state.tripleBlock[1]}
                        onChange={event => this.updateBlock(event, 1, 'tripleBlock')}
                    />
                    <input
                        className="battleship-c-new-game__input"
                        value={this.state.tripleBlock[2]}
                        onChange={event => this.updateBlock(event, 2, 'tripleBlock')}
                    />
                </div>

                <div className="battleship-c-new-game__row">
                    <label className="battleship-c-new-game__label">4 block submarine</label>
                    <input
                        className="battleship-c-new-game__input"
                        value={this.state.quatreBlock[0]}
                        onChange={event => this.updateBlock(event, 0, 'quatreBlock')}
                    />
                    <input
                        className="battleship-c-new-game__input"
                        value={this.state.quatreBlock[1]}
                        onChange={event => this.updateBlock(event, 1, 'quatreBlock')}
                    />
                    <input
                        className="battleship-c-new-game__input"
                        value={this.state.quatreBlock[2]}
                        onChange={event => this.updateBlock(event, 2, 'quatreBlock')}
                    />
                    <input
                        className="battleship-c-new-game__input"
                        value={this.state.quatreBlock[3]}
                        onChange={event => this.updateBlock(event, 3, 'quatreBlock')}
                    />
                </div>

                <div className="battleship-c-new-game__board">
                    <Board mySubmarines={submarines} />
                </div>

                <div className="battleship-c-new-game__submit">
                    <button
                        className="battleship-c-new-game__submit-button"
                        onClick={this.startGame}
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

export default NewGame;
