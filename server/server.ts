import express from 'express'
import * as Path from 'node:path'

const server = express()

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
  } else if (secretType === 'lizards') {
    res.sendStatus(404)
  } else {
    res.sendFile(Path.resolve('./server/secrets.json'))
  }
})

export default server
