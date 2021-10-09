import { request } from 'undici'

async function * createLastFmRecentTracks (apiKey, user) {
  let to = ''
  while (true) {
    const query = new URLSearchParams({
      method: 'user.getrecenttracks',
      user,
      api_key: apiKey,
      format: 'json',
      to
    })
    const url = `https://ws.audioscrobbler.com/2.0/?${query}`
    const { body } = await request(url)

    const data = await body.json()
    const tracks = data.recenttracks.track

    yield tracks

    if (data.recenttracks['@attr'].totalPages <= 1) {
      break // it's the last page!
    }

    const lastTrackInPage = tracks[tracks.length - 1]
    to = lastTrackInPage.date.uts
  }
}

const recentTracks = createLastFmRecentTracks(process.env.API_KEY, 'loige')
for await (const page of recentTracks) {
  for (const track of page) {
    if (track.name.toLowerCase().includes('dark')) {
      console.log(`${track.date['#text']}: ${track.artist['#text']} - ${track.name}`)
    }
  }
}
