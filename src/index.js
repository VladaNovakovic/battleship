import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';

const wrapper = document.getElementById('app');

if (wrapper) {
    ReactDOM.render((
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={App} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>), wrapper);
}
