import express from 'express'
import chalk from 'chalk'
import dotenv from 'dotenv'

dotenv.config()
/*
 to kill port
  netstat -ano | findstr 8000
   taskkill /F /PID 8436 (processId)

 */

const SUCCESS = chalk.bold
const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(SUCCESS('hey i m listing on 8000'))
})
