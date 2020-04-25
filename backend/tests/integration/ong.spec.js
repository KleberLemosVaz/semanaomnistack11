const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll( async () =>{
        connection.destroy()
    })

    it ('shoud be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
                name:"ONG2",
                email:"contato",
                whatsapp:"123456789",
                city:"Santos",
                uf:"SP"
        })
    })
})