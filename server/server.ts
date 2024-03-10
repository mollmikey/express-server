import express from 'express'

const server = express()

server.get('/compliment', (req, res) => {
  res.json({
    category: 'fashion',
    powerLevel: 10,
    text: 'What a fancy blazer~',
  })
})
export default server
