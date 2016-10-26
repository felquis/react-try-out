import React from 'react'
import {render} from 'react-dom'
import Login from './screens/login'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
}

class Inbox extends React.Component {
  render() {
    return (
      <div>
        <h1>Inbox</h1>
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>

        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.getElementById('root'))
