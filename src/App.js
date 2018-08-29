import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Battlefield from './game/Battlefield/Battlefield';
import {NewGame} from './new-game';
import WelcomeMessage from './home-page/HomePage';
import Navigation from './ui-elements/Navigation/Navigation';

const App = function () {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/game" component={Battlefield} />
                    <Route path="/new-game" component={NewGame} />
                    <Route path="/" component={WelcomeMessage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
