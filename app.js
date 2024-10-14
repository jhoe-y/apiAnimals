import express from 'express'
import animalRoutes from './routes/animalRoutes.js'

const app = express()

app.use(express.json())
app.use('/api', animalRoutes)

const NODE_PORT = process.env.APP_PORT

app.listen(NODE_PORT, () => {
    console.log(`Server is running on NODE_PORT ${NODE_PORT}`)
})
