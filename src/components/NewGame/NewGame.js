import React from 'react';
import Navigation from '../Navigation/Navigation';

const NewGame = function () {
    return [(
        <Navigation key={0} />
    ), (
        <div className="battleship-c-battlefield" key={1}>
            <h1>New Game</h1>
        </div>
        )];
};

export default NewGame;
