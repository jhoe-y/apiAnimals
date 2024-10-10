import { Router } from 'express'
import { getAllAnimals, createAnimal } from '../controllers/animalControllers.js'

const router = Router()

router.get('/animals', getAllAnimals)
router.post('/animals', createAnimal)

export default router
