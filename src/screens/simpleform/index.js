import React from 'react'

import st from './index.css'
import GoBack from './../../components/goback'

class SimpleForm extends React.Component {
  render() {
    return (
      <div className={st.subRoot}>
        <GoBack /> 

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
        </div>
      </div>
    )
  }
}

export default SimpleForm
