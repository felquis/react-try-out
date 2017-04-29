import React from 'react'
import { Link } from 'react-router'

import Header from './../../components/Header'
import st from './index.css'

class SimpleForm extends React.Component {
  render() {
    return (
      <div className={st.fullHeight}>
        <Header logo={() => (
          <Link to="/">Voltar</Link>
        )} />

      <div className={st.articlePage}>
        <div className={st.container}>
          <div>
            <div className={st.row}>
              <div className={st.horizontalColumn}>
                <div className={st.horizontalInput}>
                  <label>First Name:</label> <input type="text" />
                </div>
                <div className={st.horizontalInput}>
                  <label>Last Name:</label> <input type="text" />
                </div>
                <div className={st.horizontalInput}>
                  <label>Address:</label> <input type="text" />
                </div>
              </div>
              <div className={st.verticalColumn}>
                <label>Department</label>

                <textarea defaultValue={'Text'} />
              </div>
            </div>

            <div className={st.footerRow}>
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

export default SimpleForm
