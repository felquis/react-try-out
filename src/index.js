import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from './screens/Home'
import PageTemplate from './screens/PageTemplate'
import SimpleForm from './screens/SimpleForm'
import Financial from './screens/Financial'
import NewOne from './screens/NewOne'

import st from './index.css'

const Children = (props) => {
  return (
    <div>{props.children}</div>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route
          path="/"
          component={Children}
          className={st.outerRoot}
        >
          <IndexRoute component={Home} />
          <Route path="page-template" component={PageTemplate} />
          <Route path="simple-form" component={SimpleForm} />
          <Route path="financial" component={Financial} />
          <Route path="new-one" component={NewOne} />
        </Route>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'))
