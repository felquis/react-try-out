import React from 'react'
import {render} from 'react-dom'
import Home from './screens/home'
import Teste from './screens/teste'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="teste" component={Teste} />
    </Route>
  </Router>
), document.getElementById('root'))
