import querystring from 'querystring'
import axios from 'axios'

async function main () {
  let to
  while (true) {
    const query = querystring.stringify({
      method: 'user.getrecenttracks',
      user: 'loige',
      api_key: process.env.API_KEY,
      format: 'json',
      limit: '10',
      to
    })
    const url = `https://ws.audioscrobbler.com/2.0/?${query}`

    const response = await axios.get(url)

    const tracks = response.data.recenttracks.track

    console.log(
      `--- ↓ page to ${to}`,
      `remaining pages: ${response.data.recenttracks['@attr'].totalPages} ---`
    )

    for (const track of tracks) {
      console.log(track.date?.uts, `${track.artist['#text']} - ${track.name}`)
    }

    if (response.data.recenttracks['@attr'].totalPages <= 1) {
      break // it's the last page!
    }

    const lastTrackInPage = tracks[tracks.length - 1]
    to = lastTrackInPage.date.uts
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
