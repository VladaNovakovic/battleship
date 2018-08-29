import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss';

const Navigation = function () {
    return (
        <div className="battleship-c-navigation" key={0}>
            <Link to="/" className="battleship-c-navigation__link">Home</Link>
            <Link to="/game" className="battleship-c-navigation__link">Game</Link>
            <Link to="/new-game" className="battleship-c-navigation__link">New Game</Link>
        </div>
    );
};

export default Navigation;
