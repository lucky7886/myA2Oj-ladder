import express from 'express'
import chalk from 'chalk'
import dotenv from 'dotenv'

dotenv.config()

const SUCCESS = chalk.bold
const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(SUCCESS('hey i m listingi on 8000'))
})
