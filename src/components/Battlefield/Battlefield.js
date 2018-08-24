import React from 'react';
import MyBoard from '../MyBoard/MyBoard';
import TargetBoard from '../TargetBoard/TargetBoard';
import Navigation from '../Navigation/Navigation';

const Battlefield = function () {
    const mySubmarines = [['a2'], ['c4', 'b4'], ['b1', 'c1', 'd1', 'e1'], ['e3', 'e4', 'e5']];
    const hitSubmarines = [['a2'], ['c4', 'b4'], ['b1', 'c1', 'd1', 'e1'], ['e3', 'e4', 'e5']];
    const missedShots = [['e1'], ['d4', 'e4'], ['a1', 'a2', 'a3', 'a4'], ['c1', 'c2', 'c3']];

    return [(
        <Navigation key={0} />
    ), (
        <div className="battleship-c-battlefield" key={1}>
            <MyBoard submarines={mySubmarines} />
            <TargetBoard missedShots={missedShots} hitSubmarines={hitSubmarines} />
        </div>
        )];
};

export default Battlefield;
