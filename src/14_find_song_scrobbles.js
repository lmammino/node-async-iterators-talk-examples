import { RecentTracks } from 'scrobbles'

const recentTracks = new RecentTracks({
  apikey: process.env.API_KEY,
  user: 'loige'
})

for await (const page of recentTracks) {
  for (const track of page) {
    if (track.name.toLowerCase().includes('dark')) {
      console.log(`${new Date(track.date * 1000).toString().substring(0, 24)}: ${track.artist} - ${track.name}`)
    }
  }
}
