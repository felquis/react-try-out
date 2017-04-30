import moment from 'moment'

import {
  calculateTotalDailyExpenses,
  calculateFreePerDay,
  calculateTotalAccountability,
} from './helper.js'

let state = {
  circleDays: 33,
  circleInitiatedAt: '2017-04-28T00:00:00Z',
  money: 120000,
  accountabilities: [{
    id: 1,
    label: 'My Place',
    type: 'substraction',
    perCircle: 50000
  }, {
    id: 2,
    label: 'Savings',
    type: 'percentage',
    perCircle: 10
  }, {
    id: 9,
    label: 'Netflix',
    type: 'substraction',
    perCircle: 2500
  }],
  dailyExpenses: [{
    id: 1,
    label: 'Coffee',
    amount: 650
  }, {
    id: 2,
    label: 'Restaurant',
    amount: 1150
  }, {
    id: 3,
    label: 'Restaurant',
    amount: 3050
  }, {
    id: 4,
    label: 'Restaurant',
    amount: 1150
  }, {
    id: 5,
    label: 'Coffee',
    amount: 750
  }, {
    id: 6,
    label: 'Restaurant',
    amount: 2690
  }, {
    id: 7,
    label: 'Restaurant',
    amount: 950
  }]
}

state.currentTime = moment().utc().format()
state.accountabilitiesTotal = calculateTotalAccountability(state.accountabilities, state.money)
state.dailyExpensesTotal = calculateTotalDailyExpenses(state.dailyExpenses)
state.freePerDay = calculateFreePerDay(state)

export default state

