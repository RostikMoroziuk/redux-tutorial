import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import todoApp from './reducers/reducers'

// create store
let store = createStore(todoApp)
// render app
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
