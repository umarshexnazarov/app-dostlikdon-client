import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReacyToastify.css";

import App from './App';
import {createStore} from 'redux';
import {Provider} from "react-redux";

const store = createStore()

ReactDOM.render(
	<Provider>
	  <App />
	</Provider>
  document.getElementById('root')
);

