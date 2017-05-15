/**
 * Created by agoidel2019 on 5/15/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import App from 'pages/App';
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
		<Router>
			<App b1="this is a"/>
        </Router>,
  document.getElementById('root')
);