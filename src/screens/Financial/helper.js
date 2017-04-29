import React from 'react'
import moment from 'moment'

export {
  Accountability,
  DailyExpense,
  calculateTotalDailyExpenses,
  calculateFreePerDay,
  calculateTotalAccountability,
  displayRemainingDays,
  displayDaysFromInit,
  displayCurrency,
  displayDays,
  calculateAccountability,
  applyAccountability
}

const accountabilitiesType = {
  substraction: (price, money) => {
    return price
  },
  percentage: (price, money) => price / 100 * money
}

function Accountability (money) {
  return (acc) => (
    <li key={acc.id}>
      <strong>{ acc.label }</strong>: { calculateAccountability(acc, money) }
    </li>
  )
}

function DailyExpense (amount) {
  return (expense, index) => (
    <li key={index}>
      {expense.label}: { displayCurrency(expense.amount) }
    </li>
  )
}

function calculateTotalDailyExpenses (dailyExpenses) {
  return dailyExpenses.reduce((acc, exp) => {
    return acc + exp.amount
  }, 0)
}

function calculateFreePerDay ({
  accountabilitiesTotal,
  money,
  circleDays,
  circleInitiatedAt,
  currentTime,
  dailyExpensesTotal
}) {
  const accountabilityPerDay = accountabilitiesTotal / circleDays
  const moneyPerDay = money / circleDays

  const a = moment(circleInitiatedAt)
    .add(circleDays, 'days')
    .diff(moment(currentTime), 'days')

  const totalDailyPerDay = dailyExpensesTotal / a

  console.log(a, totalDailyPerDay);

  return moneyPerDay - accountabilityPerDay - totalDailyPerDay
}

function calculateTotalAccountability (state) {
  const total = state.accountabilities.reduce((acc, actb) => {
    return acc + applyAccountability(actb.type, actb.perCircle, state.money)
  }, 0)

  return total
}

function displayRemainingDays (circleDays) {
  return moment.duration().add(circleDays, 'days').humanize(true)
}

function displayDaysFromInit ({ currentTime, circleInitiatedAt }) {
  const now = moment(currentTime)
  const init = moment(circleInitiatedAt)

  const minutes = now.diff(init, 'seconds')

  return moment.duration().subtract(
    minutes, 'seconds'
  ).humanize()
}

function displayCurrency (amount) {
  return (amount / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

function displayDays (days) {
  return days > 1 ? days + ' days' : days + ' day'
}

function calculateAccountability (acc, money) {
  const amount = applyAccountability(acc.type, acc.perCircle, money)

  return displayCurrency(amount)
}

function applyAccountability(type, circle, money) {
  const apply = accountabilitiesType[type]

  return apply(circle, money)
}

