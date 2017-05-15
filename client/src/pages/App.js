/**
 * Created by agoidel2019 on 5/15/17.
 */
import React from 'react';
import {Helmet} from "react-helmet";
import {Route, Switch, Link} from "react-router-dom";

import "./App.css";


const App = (props) => (<div>
<body>
<h1>Music Input Switcher</h1>
<div id="buttons">
  <a className="btn blue" href="#">Bluetooth</a>
  <a className="btn red" href="#">Radio</a>
  <a className="btn green" href="#">Vinyl</a>
  <a className="btn yellow" href="#" >Guitar</a>
</div>
</body>
</div>
);

export default App;
