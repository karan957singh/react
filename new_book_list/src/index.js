import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index';


const Store = createStore(reducers);
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
