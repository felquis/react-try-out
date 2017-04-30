import React from 'react'

import st from './index.css'

import GoBack from './../../components/GoBack'
import config from './config.js'
import moment from 'moment'

import {
  Accountability,
  DailyExpense,
  calculateTotalDailyExpenses,
  calculateFreePerDay,
  calculateTotalAccountability,
  displayRemainingDays,
  displayDaysFromInit,
  displayCurrency,
} from './helper.js'

class PageTemplate extends React.Component {
  constructor() {
    super()
    this.state = Object.assign({}, config.defaultState)

    this.setState({
      accountabilitiesTotal: calculateTotalAccountability(this.state)
    })

    this.setState({
      dailyExpensesTotal: calculateTotalDailyExpenses(this.state.dailyExpenses)
    })

    this.setState({
      freePerDay: calculateFreePerDay(this.state)
    })

    this.setState({
      currentTime: moment(config.currentTime).utc().format()
    })

    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent() {
    this.setState({ property: !this.state.property })
  }

  render() {
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
    } = this.state

    return (
      <div className={st.property}>
        <GoBack />

      <div className={st.articlePage}>
        <div className={st.container}>
          <div>
            <ul>
              <li>
                Circle ends {
                  displayRemainingDays(circleDays)
                }, {
                  displayDaysFromInit(currentTime, circleInitiatedAt)
                } since beginning
              </li>
              <li>Available: { displayCurrency(money) }, it is {
                displayCurrency(money / circleDays)
              } per day</li>
            <li>It is {
              displayCurrency(freePerDay)
            } free to spend today</li>
          <li>
            Totalliness {
              Math.ceil((dailyExpensesTotal + accountabilitiesTotal) / money * 100)
            }% { (dailyExpensesTotal + accountabilitiesTotal) / money * 100 }
          </li>
          <li>
            <h4>Accountabilities</h4>
            <p>Total of {
              displayCurrency(accountabilitiesTotal / circleDays)
            } per day</p>
          <ul>
            {accountabilities.map(Accountability(money))}
            <li>Total: {
              displayCurrency(accountabilitiesTotal)
            }</li>
        </ul>
      </li>
      <li>
        <h4>Daily Expenses</h4>
        <p>Total {displayCurrency(dailyExpensesTotal)}</p>
        <ol>
          {dailyExpenses.map(DailyExpense(amount))}
        </ol>
      </li>
    </ul>
  </div>
</div>
        </div>
      </div>
    )
  }
}

export default PageTemplate
