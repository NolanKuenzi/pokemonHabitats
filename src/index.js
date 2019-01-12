import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import ReactRouter from './router';
import './myStyles.scss';

const App = () => (
  <div>
    <Header />
    <ReactRouter />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
