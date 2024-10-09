import { Sequelize } from 'sequelize'


const sequelize = new Sequelize('animaldb', 'jhoe', 'jhoe123', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})

const authenticateDatabase = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexión a la base de datos establecida correctamente.')
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error)
    }
};

authenticateDatabase()

export default sequelize
