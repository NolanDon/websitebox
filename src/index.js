import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/Homepage';
import * as serviceWorker from './serviceWorker';
export const Bookswap = require('./components/images/bookswap.png');
export const Junglefy = require('./components/images/junglefy.png');
export const RailsWebsite = require('./components/images/railswebsite.png');
export const Scheduler = require('./components/images/scheduler.png');
export const Schoodle = require('./components/images/schoodle.png');
export const TinyApp = require('./components/images/tinyapp.jpg');
export const Tweeter = require('./components/images/tweeter.png');

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
