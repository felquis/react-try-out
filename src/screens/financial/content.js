import React from 'react'
import st from './index.css'

import {
  Accountability,
  DailyExpense,
  displayRemainingDays,
  displayDaysFromInit,
  displayCurrency,
} from './helper.js'

const Content = (props) => {
  const {
    circleDays,
    money,
    accountabilities,
    freePerDay,
    accountabilitiesTotal,
    dailyExpenses,
    dailyExpensesTotal,
    currentTime,
    circleInitiatedAt,
    amount
  } = props.state

  return (
    <div className={st.container}>
        <ul>
          <li>
            2 Circle ends {
              displayRemainingDays(circleDays)
            }, {
              displayDaysFromInit(currentTime, circleInitiatedAt)
            } since beginning
          </li>
          <li>
            Available: { displayCurrency(money) }, it is {
              displayCurrency(money / circleDays)
            } per day
          </li>
          <li>
            It is {
              displayCurrency(freePerDay)
            } free to spend today
          </li>
          <li>
            Totalliness {
              Math.ceil((dailyExpensesTotal + accountabilitiesTotal) / money * 100)
            }% { (dailyExpensesTotal + accountabilitiesTotal) / money * 100 }
          </li>
          <li>
            <h4>Accountabilities</h4>
            <p>
              Total of {
                displayCurrency(accountabilitiesTotal / circleDays)
              } per day
            </p>
            <div>
              {accountabilities.map(Accountability(money))}
              <p>
                Total: {
                  displayCurrency(accountabilitiesTotal)
                }
              </p>
            </div>
          </li>
          <li>
            <h4>Daily Expenses</h4>
            <p>Total {displayCurrency(dailyExpensesTotal)}</p>
            <p>{dailyExpenses.map(DailyExpense(amount))}</p>
          </li>
        </ul>
      </div>
  )
}

export default Content

