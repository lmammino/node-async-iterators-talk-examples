// 🔥 HOT TIP:
// because a generator function produces both an iterable and an iterator object
// we could rewrite the previous example as follows
function * createCountdown (from) {
  for (let i = from; i >= 0; i--) {
    yield i
  }
}

const countdown = createCountdown(3)
for (const value of countdown) {
  console.log(value)
}
