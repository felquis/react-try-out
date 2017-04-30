import React from 'react'

import Header from '../../components/Header'
import Content from '../../components/Content'

import navigations from '../../schemas/navigations'

import { Link } from 'react-router'

import st from './index.css'

const Nav = (props) => (
  <div className={st.innerContainer}>
    {props.links.map((nav, key) => {
      return (
        <Link
          key={key}
          className={st.item}
          to={nav.to}
        >{nav.label}</Link>
      )
    })}
  </div>
)

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      navigations
    }
  }

  render() {
    const { navigations } = this.state

    return (
      <div className={st.pageArticle}>
        <nav className={st.navigation}>
          <Header logo={() => <div>Alo!</div>} />

          <Content className={'asasa'} children={() =>
              <Nav links={navigations} />}
          />
        </nav>
      </div>
    )
  }
}

export default Home
