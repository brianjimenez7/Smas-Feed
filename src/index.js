//this is like the starting point of react
//var React=require('react');
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//here reactDom is getting the element called root and replacing it with <app.>
//es6 is what react uses instead of javascript, much easirt to write and then converts it 
//camt find babelrc which is wht converts it 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
