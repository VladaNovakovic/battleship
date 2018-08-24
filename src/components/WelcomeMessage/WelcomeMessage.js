import React from 'react';
import Navigation from '../Navigation/Navigation';

const WelcomeMessage = function () {
    return [(
        <Navigation key={0} />
    ), (
        <h2 key={1}>Hello there</h2>
        )];
};

export default WelcomeMessage;
