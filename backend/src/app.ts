import express from 'express'
import {config} from 'dotenv'
import appRouter from './routes/index.js'

config()
const app = express()

//middleware
app.use(express.json())
app.use("/api/v1", appRouter)
export default app