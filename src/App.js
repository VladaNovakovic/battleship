import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Battlefield from './components/Battlefield/Battlefield';
import NewGame from './components/NewGame/NewGame';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';

const App = function () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/game" component={Battlefield} />
                <Route path="/new-game" component={NewGame} />
                <Route path="/" component={WelcomeMessage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
