import querystring from 'querystring'
import axios from 'axios'

async function main () {
  const query = querystring.stringify({
    method: 'user.getrecenttracks',
    user: 'loige',
    api_key: process.env.API_KEY,
    format: 'json'
  })
  const url = `https://ws.audioscrobbler.com/2.0/?${query}`

  const response = await axios.get(url)

  console.log(response.data)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
