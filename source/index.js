import Main from './components/app.jsx';
import React from 'react';
require('./components/app');
require('./reset.css');
require('./styles.css');
import ReactDOM from 'react-dom';

ReactDOM.render(<Main />, document.getElementById('application'));
