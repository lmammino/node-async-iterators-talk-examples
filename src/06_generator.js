function * createCountdown (from) {
  for (let i = from; i >= 0; i--) {
    yield i
  }
}

const countdown = createCountdown(3)
console.log(countdown.next()) // { done: false, value: 3 }
console.log(countdown.next()) // { done: false, value: 2 }
console.log(countdown.next()) // { done: false, value: 1 }
console.log(countdown.next()) // { done: true, value: 0 }
console.log(countdown.next()) // { done: true, value: undefined }
