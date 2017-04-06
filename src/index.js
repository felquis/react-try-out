import React from 'react'
import {render} from 'react-dom'
import Home from './screens/home'
import PageTemplate from './screens/PageTemplate/index.js'
import SimpleForm from './screens/SimpleForm/index.js'
import styles from './index.css'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

render((
  <Router history={hashHistory}>
    <Route
      path="/"
      component={App}>
      <IndexRoute component={Home} />

      <Route path="page-template" component={PageTemplate} />
      <Route path="simple-form" component={SimpleForm} />
    </Route>
  </Router>
), document.getElementById('root'))
