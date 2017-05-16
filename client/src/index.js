/**
 * Created by agoidel2019 on 5/15/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from 'pages/App';
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
		<Router>
			<App />
        </Router>,
  document.getElementById('root')
);


fetch("/api/setup", {method:"POST"})