import React from 'react'

import st from './index.css'

class Content extends React.Component {
  render() {
    return (
      <div className={st.articlePage}>
        <div className={st.container}>
          <this.props.children />
        </div>
      </div>
    )
  }
}

export default Content
