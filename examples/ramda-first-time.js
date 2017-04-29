const typeEquals = type => pipe(prop('type'), equals(type))
const multiplyMeat = amount => pipe(prop('amount'), multiply(amount))

const burguer = {
  bread: pipe(prop('amount'), multiply(2)),
  meat: cond([
    [ typeEquals('monstro'), multiplyMeat(200) ],
    [ typeEquals('leve'),    multiplyMeat(100) ]
  ])
}

const ingredients = applySpec(burguer)

ingredients({
  amount: 2,
  type: 'leve'
})
