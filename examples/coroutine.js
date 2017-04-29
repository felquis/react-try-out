function doThat () {
  return new Promise((resolve) => {
    resolve()
  })
}

Promise.coroutine(function * () {
  const resolved = yield doThat

  console.log(resolved)
})
