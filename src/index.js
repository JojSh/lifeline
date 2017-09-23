import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lifeline from './Lifeline';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Lifeline />, document.getElementById('root'));
registerServiceWorker();
