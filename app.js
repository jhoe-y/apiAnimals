import express from 'express'
import animalRoutes from './routes/animalRoutes.js'

const app = express()

app.use(express.json())
app.use('/api', animalRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})