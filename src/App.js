import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Battlefield from './components/Battlefield/Battlefield';
import NewGame from './components/NewGame/NewGame';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import Navigation from './components/Navigation/Navigation';

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
