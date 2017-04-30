import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from './screens/home'
import PageTemplate from './screens/pagetemplate'
import SimpleForm from './screens/simpleform'
import Financial from './screens/financial'
import NewOne from './screens/newone'

import st from './index.css'

const Children = (props) => {
  return (
    <div className={st.container}>{props.children}</div>
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

