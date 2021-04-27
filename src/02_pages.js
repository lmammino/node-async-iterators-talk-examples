import querystring from 'querystring'
import axios from 'axios'

async function main () {
  let page = 1
  while (true) {
    const query = querystring.stringify({
      method: 'user.getrecenttracks',
      user: 'loige',
      api_key: process.env.API_KEY,
      format: 'json',
      page
    })
    const url = `https://ws.audioscrobbler.com/2.0/?${query}`

    const response = await axios.get(url)

    console.log(response.data)

    if (page === Number(response.data.recenttracks['@attr'].totalPages)) {
      break // it's the last page!
    }

    page++
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
