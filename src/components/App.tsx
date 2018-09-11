import * as React from "react";
import { Route } from "react-router-dom";

import Episodes from '../containers/Episodes';
import Library from '../containers/Library';
import './App.css';

let logo = require('../logo.png');
class TopBar extends React.Component<{}, {}> {
  render() {
    return(
    <div className="topbar">
      <img className='icon' src={logo}/>
      <h2> PodSync </h2>
    </div>)
  }
}

class App extends React.Component<{}, {}> {
  render() {
    return(
    <div>
    <TopBar />
    <Route path="/" exact={true} component={Library} />
    <Route path="/podcast/:podcastId" component={Episodes} />
    </div>
    )
  }
}
export default App;