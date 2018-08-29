import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Game} from './game';
import {NewGame} from './new-game';
import {HomePage} from './home-page';
import {Navigation} from './ui-elements';

const App = function () {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/game" component={Game} />
                    <Route path="/new-game" component={NewGame} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
