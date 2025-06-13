import express from 'express'
import { VercelRequest, VercelResponse } from '@vercel/node'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello from Express + TypeScript + Vercel + ESM!')
})

app.get('/test', (req, res) => {
  res.send('test')
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
  app(req, res)
}

