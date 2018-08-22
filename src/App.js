import React, { Component } from "react";
import { Link } from 'react-router-dom';
import MyBoard from './components/MyBoard/MyBoard';
import TargetBoard from './components/TargetBoard/TargetBoard';

class App extends Component {
    render() {
        let mySubmarines = [['a2'], ['c4', 'b4'], ['b1', 'c1', 'd1', 'e1'], ['e3', 'e4', 'e5']];
        let hitSubmarines = [['a2'], ['c4', 'b4'], ['b1', 'c1', 'd1', 'e1'], ['e3', 'e4', 'e5']];
        let missedShots = [['e1'], ['d4', 'e4'], ['a1', 'a2', 'a3', 'a4'], ['c1', 'c2', 'c3']];

        return (
            <div className="battleship-c-battlefield">
                <Link to='home'>Home</Link>
                <MyBoard submarines={mySubmarines}/>
                <TargetBoard missedShots={missedShots} hitSubmarines={hitSubmarines}/>
            </div>
        );
    }
}

export default App;