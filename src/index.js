'use strict'

import express from 'express'
import morgan from 'morgan'
import router from './routers'
import cors from 'cors'

require('dotenv').config()

const app = express()

const BODY_SIZE_LIMIT = '17mb'

app.disable('x-powered-by')
// logger
app.use(morgan('combined'))
app.use(express.json({ limit: BODY_SIZE_LIMIT }))
app.use(express.urlencoded({ limit: BODY_SIZE_LIMIT, extended: true }))
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
}))

app.use('/api', router)

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    res.status(err.status).send({ message: err.message })
    console.log(err)
    return
  } else if (err.name === 'UnauthorizedError') {
    res.status(err.status).send({ message: err.message })
    console.log(err)
    return
  }
  next()
})

module.exports = app
