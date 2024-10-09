import { Animal } from '../models/animalModels.js'

export const getAll = async () => {
    try {
        return await Animal.findAll()
    } catch (error) {
        console.error('Error fetching animals:', error)
        throw error
    }
}

export const create = async (animalData) => {
    try {
        return await Animal.create(animalData)
    } catch (error) {
        console.error('Error creating animal:', error)
        throw error
    }
}