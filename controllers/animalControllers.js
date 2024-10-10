import * as AnimalService from '../services/animalServices.js'

export const getAllAnimals = async (req, res) => {
    try {
        console.log('Hola')
        const animals = await AnimalService.getAll()
        res.status(200).json(animals)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const createAnimal = async(req, res) => {
    try {
        const newAnimal = await AnimalService.create(req.body)
        res.status(201).json(newAnimal)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}
