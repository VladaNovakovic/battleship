import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = function () {
    return (
        <div className="battleship-c-board__navigation" key={0}>
            <Link to="/">Home</Link>
            <Link to="/game">Game</Link>
            <Link to="/new-game">New Game</Link>
        </div>
    );
};

export default Navigation;
