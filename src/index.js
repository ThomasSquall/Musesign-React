import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import PubblicaUnProgettoFASE2 from './views/pubblica-un-progetto-f-a-s-e-2'
import Home from './views/home'
import PubblicaUnProgettoFASE1 from './views/pubblica-un-progetto-f-a-s-e-1'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={PubblicaUnProgettoFASE2}
          exact
          path="/pubblica-un-progetto-f-a-s-e-2"
        />
        <Route component={Home} exact path="/" />
        <Route
          component={PubblicaUnProgettoFASE1}
          exact
          path="/pubblica-un-progetto-f-a-s-e-1"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
