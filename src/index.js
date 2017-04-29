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
      <Router className={st.page} history={hashHistory}>
        <Route
          path="/"
          component={Children}
          className={st.page}
        >
          <IndexRoute
            component={Home}
            className={st.page}
          />

          <Route
            path="page-template"
            component={PageTemplate}
            className={st.page}
          />

          <Route
            path="simple-form"
            component={SimpleForm}
          />

          <Route
            path="financial"
            component={Financial}
          />

          <Route
            path="new-one"
            component={NewOne}
          />
        </Route>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'))
