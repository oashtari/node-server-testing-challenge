const request = require('supertest');

const server = require('./server')

describe('server.js', function () {

    describe('GET /', function () {

        it('should return 200 ok', async function () {
            const response = await request(server).get('/');

            expect(response.status).toBe(200)
        })


        it('should return JSON', function () {
            return request(server)
                .get('/')
                .then(response => {
                    expect(response.type).toMatch(/json/i)
                })
        })


        it('should respond with {"api":"up"}', function () {
            return request(server)
                .get('/')
                .then(response => {
                    expect(response.body.api).toBe("up")

                })
        })

    })
})

