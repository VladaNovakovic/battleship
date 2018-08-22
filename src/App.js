import React, { Component } from "react";
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import MyBoard from './components/MyBoard/MyBoard';
import TargetBoard from './components/TargetBoard/TargetBoard';

class App extends Component {
    render() {
        let activeSubmarines = [['a2'], ['c4', 'b4'], ['b1', 'c1', 'd1', 'e1'], ['e3', 'e4', 'e5']];
        let hiddenSubmarines = [['e1'], ['d4', 'e4'], ['a1', 'a2', 'a3', 'a4'], ['c1', 'c2', 'c3']];

        return (
            <div>
                <WelcomeMessage/>
                <div className="battleship-c-battlefield">
                    <MyBoard submarines={hiddenSubmarines}/>
                    <TargetBoard missedShots={hiddenSubmarines} hitSubmarines={activeSubmarines}/>
                </div>
            </div>
        );
    }
}

export default App;