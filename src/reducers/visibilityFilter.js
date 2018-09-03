/* eslint-disable no-console */
const visibilityFilter = (state = 'STATE') => {
    switch (state) {
        case 'SOMETHING':
            console.log('something');
            break;
        default:
            console.log('default');
            break;
    }
};

export default visibilityFilter;
