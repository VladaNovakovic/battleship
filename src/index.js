import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log('here we go');

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(React.createElement(App), wrapper) : false;