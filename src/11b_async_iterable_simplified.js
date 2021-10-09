import { setTimeout } from 'timers/promises'

// 🔥 HOT TIP:
// because an async generator function produces an object
// that is both an async iterable and an async iterator
// we could rewrite the previous example as follows
async function * createAsyncCountdown (from, delay = 1000) {
  for (let i = from; i >= 0; i--) {
    await setTimeout(delay)
    yield i
  }
}

const countdown = createAsyncCountdown(3)
for await (const value of countdown) {
  console.log(value)
}
