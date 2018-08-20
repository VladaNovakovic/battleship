import React, { Component } from "react";
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import Board from './components/Board/Board';

class App extends Component {
    render() {
        return (
        <div>
            <WelcomeMessage/>
            <div className="battleship-c-battlefield">
                <Board/>
                <Board/>
            </div>
        </div>);
    }
}

export default App;