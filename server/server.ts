import express from 'express'
import Path from 'node:path'
import url from 'node:url'

const server = express()
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

server.get('/compliment', (req, res) => {
  res.json({
    category: 'fashion',
    powerLevel: 10,
    text: 'What a fancy blazer~',
  })
})

server.get('/secrets', (req, res) => {
  let secretType = req.query.type

  if (secretType === 'mystical') {
    res.sendFile(Path.resolve('./server/mystical-secrets.json'))
  } else if (secretType === 'kitchen') {
    res.sendFile(Path.resolve('./server/kitchen-secrets.json'))
    // } else if (secretType === 'lizards') {
    //   res.sendStatus(404)
  } else {
    res.sendFile(Path.resolve('./server/secrets.json'))
  }
})

// server.get('/secrets/:type', (req, res) => {
//   let type = req.params.type
//   if (type == 'kitchen' || type == 'mystical') {
//     res.sendFile(Path.join(__dirname, `/${type}-secrets.json`))
//   } else {
//     res.sendStatus(404)
//   }
// })

server.get('/secrets/:type', (req, res) => {
  let type = req.params.type
  if (type == 'mystical' || type == 'kitchen') {
    res.sendFile(Path.join(__dirname, `/${type}-secrets.json`))
  } else {
    res.sendStatus(404)
  }
})

export default server
