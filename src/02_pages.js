import { request } from 'undici'

let page = 1

while (true) {
  const query = new URLSearchParams({
    method: 'user.getrecenttracks',
    user: 'loige',
    api_key: process.env.API_KEY,
    format: 'json',
    page
  })

  const url = `https://ws.audioscrobbler.com/2.0/?${query}`
  const { body } = await request(url)

  const data = await body.json()
  console.log(data)

  if (page === Number(data.recenttracks['@attr'].totalPages)) {
    break // it's the last page!
  }

  page++
}
