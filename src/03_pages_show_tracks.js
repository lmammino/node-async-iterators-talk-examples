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
      limit: '10',
      page
    })
    const url = `https://ws.audioscrobbler.com/2.0/?${query}`

    const response = await axios.get(url)

    for (const track of response.data.recenttracks.track) {
      console.log(track.date?.['#text'], `${track.artist['#text']} - ${track.name}`)
    }
    console.log('--- end page ---')

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
