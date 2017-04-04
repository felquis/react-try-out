import React from 'react'

class Content extends React.Component {
  render() {
    return (
      <div className="article-page">
        <div className="container">
          <this.props.children />
        </div>
      </div>
    )
  }
}

export default Content
