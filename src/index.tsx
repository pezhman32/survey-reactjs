import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();

const ROOT = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ROOT/>, document.getElementById('root'));
