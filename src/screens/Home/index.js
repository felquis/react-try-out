import React from 'react'

import Header from '../../components/Header'
import Content from '../../components/Content'

import { Link } from 'react-router'

import st from './index.css'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      navigations: [
        {
          to: 'page-template',
          label: 'Page Template'
        },
        {
          to: 'simple-form',
          label: 'Simple Form'
        },
        {
          to: 'financial',
          label: 'Financial'
        },
        {
          to: 'new-one',
          label: 'New One'
        }
      ]
    }
  }

  render() {
    console.log('render')

    const { navigations } = this.state

    return (
      <div className={st.pageArticle}>
        <nav className={st.navigation}>
          <Header logo={() => (
              <div>Alo!</div>
            )}
          />

        <Content className={'asasa'} children={() => {
            return (
              <div className={st.innerContainer}>
                {navigations.map((navigation, key) => {
                  return (
                    <Link
                      key={key}
                      className={st.item}
                      to={navigation.to}
                    >{navigation.label}</Link>
                  )
                })}
              </div>
            )}}
          />
        </nav>
      </div>
    )
  }
}

export default Home
