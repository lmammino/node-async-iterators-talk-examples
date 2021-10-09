import { request } from 'undici'

let to = ''
while (true) {
  const query = new URLSearchParams({
    method: 'user.getrecenttracks',
    user: 'loige',
    api_key: process.env.API_KEY,
    format: 'json',
    limit: '10',
    to
  })
  const url = `https://ws.audioscrobbler.com/2.0/?${query}`
  const { body } = await request(url)

  const data = await body.json()
  const tracks = data.recenttracks.track

  console.log(
    `--- ↓ page to ${to}`,
    `remaining pages: ${data.recenttracks['@attr'].totalPages} ---`
  )
  for (const track of tracks) {
    console.log(track.date?.uts, `${track.artist['#text']} - ${track.name}`)
  }

  if (data.recenttracks['@attr'].totalPages <= 1) {
    break // it's the last page!
  }

  const lastTrackInPage = tracks[tracks.length - 1]
  to = lastTrackInPage.date.uts
}
