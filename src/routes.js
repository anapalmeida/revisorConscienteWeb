import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Background from './components/Background';
import Home from './pages/Home';
import Translator from './pages/Translator';

function Routers() {
  return (
    <Background>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/translator" component={Translator} exact />
        </Switch>
      </Router>
    </Background>
  );
}

export default Routers;
