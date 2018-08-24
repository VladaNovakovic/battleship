import ReactDOM from 'react-dom';
import App from './App';

const wrapper = document.getElementById('app');

if (wrapper) {
    const app = App();

    ReactDOM.render((app), wrapper);
}
