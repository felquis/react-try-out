import React from 'react'
import {render} from 'react-dom'
import Login from './screens/login'

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
  constructor() {
    super()

    this.state = {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let Child

    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/inbox': Child = Inbox; break;
      default: Child = Home
    }

    return (
      <div className="element">
        <h1>App</h1>
        <ul>
          <li><a href="#/about">about</a></li>
          <li><a href="#/inbox">inbox</a></li>
        </ul>
        <Child />
      </div>
    )
  }
}


render(<App />, document.getElementById('root'))
