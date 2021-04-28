import querystring from 'querystring'
import axios from 'axios'

function createLastFmRecentTracks (apiKey, user) {
  return {
    [Symbol.asyncIterator]: async function * () {
      let to
      while (true) {
        const query = querystring.stringify({
          method: 'user.getrecenttracks',
          user,
          api_key: apiKey,
          format: 'json',
          to
        })
        const url = `https://ws.audioscrobbler.com/2.0/?${query}`

        const response = await axios.get(url)

        const tracks = response.data.recenttracks.track

        yield tracks

        if (response.data.recenttracks['@attr'].totalPages <= 1) {
          break // it's the last page!
        }

        const lastTrackInPage = tracks[tracks.length - 1]
        to = lastTrackInPage.date.uts
      }
    }
  }
}

async function main () {
  const recentTracks = createLastFmRecentTracks(process.env.API_KEY, 'loige')
  for await (const page of recentTracks) {
    console.log(page)
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
