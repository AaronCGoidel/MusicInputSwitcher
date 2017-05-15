/**
 * Created by agoidel2019 on 5/15/17.
 */
import React from 'react';
import {Helmet} from "react-helmet";
import {Route, Switch, Link} from "react-router-dom";

import "./App.css";


const sendSelection = (id) => {
	fetch("/api/activate", {
		method:"POST",
		headers: new Headers({
			'Content-Type':"application/json"
		}),
		body:JSON.stringify({
			id
		})
	})

	window.updateData();
}

const App = (props) => (<div>
<body>
<h1>Music Input Switcher</h1>
<div id="buttons">
  <a className="btn blue" onClick={e => sendSelection(10)}>Bluetooth</a>
  <a className="btn red" onClick={e => sendSelection(20)}>Radio</a>
  <a className="btn green" onClick={e => sendSelection(30)}>Vinyl</a>
  <a className="btn purple" onClick={e => sendSelection(40)}>Guitar</a>
</div>
</body>
</div>
);

export default App;
