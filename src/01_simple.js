import { request } from 'undici'

const query = new URLSearchParams({
  method: 'user.getrecenttracks',
  user: 'loige',
  api_key: process.env.API_KEY,
  format: 'json'
})

const url = `https://ws.audioscrobbler.com/2.0/?${query}`
const { body } = await request(url)

console.log(await body.json())
