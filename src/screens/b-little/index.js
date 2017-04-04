import React from 'react'
import { Link } from 'react-router'
import Header from './../../components/Header.js'
import styles from './index.css'

class BLittle extends React.Component {
  constructor() {
    super()
    this.state = { property: true }
    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent() {
    this.setState({ property: !this.state.property })
  }

  render() {
    const {
      property
    } = this.state

    return (
      <div className="full-height">
        <Header logo={() => (
          <Link to="/">Voltar</Link>
        )} />

        <div className="article-page">
          <div className="container">
            <div>
              <div className={styles.row}>
                <div className={styles.horizontalColumn}>
                  <div className={styles.horizontalInput}>
                    <label>First Name:</label> <input type="text" /> 
                  </div> 
                  <div className={styles.horizontalInput}>
                    <label>Last Name:</label> <input type="text" />
                  </div> 
                  <div className={styles.horizontalInput}>
                    <label>Address:</label> <input type="text" />
                  </div>
                </div> 
                <div className={styles.verticalColumn}>
                  <label>Department</label>

                  <textarea defaultValue={'Text'} />
                </div>
              </div>

              <div className={styles.footerRow}> 
                <button>Back</button>
                <button>Cancel</button>
                <button>Next</button>
              </div>
            </div>
          </div> {/* container */}
        </div> {/* article-page */}
      </div> 
    )
  }
}

export default BLittle
