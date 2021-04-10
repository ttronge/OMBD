import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, } from 'react-router-dom'
import Movies from "./containers/movies";
import './bootstrap-dark.css'
import "./index.css";
import Loggin from './containers/Loggin'
import SinglermovieContainer from './containers/SinglermovieContainer'
import Register from './containers/Register'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={Loggin} />
      <Route path="/home" component={Movies} />
      <Route path="/register" component={Register} />
      <Route path={`/movies/:title`} render={({ match }) => <SinglermovieContainer movieTitle={match.params.title} />} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
