import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

dotenv.config

export const Animal = sequelize.define('Animal', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    species: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'animals',
    timestamps: false
})
