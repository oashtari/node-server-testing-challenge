const request = require("supertest")
const server = require('../api/server')
const db = require('../data/db-config');

const Snacks = require('./snacks-model');

// describe('POST /users', function () {
//     it('responds with json', function (done) {
//         request(app)
//             .post('/users')
//             .send({ name: 'john' })
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .end(function (err, res) {
//                 if (err) return done(err);
//                 done();
//             });
//     });
// });

describe('snacks model', () => {
    describe('insert()', () => {

        beforeEach(async () => {
            await db('snacks').truncate();
        })

        // it('should return 200 ok', async function () {
        //     const response = await request(server).get('/');
        //     console.log('response', response.status)
        //     expect(response.status).toBe(200)
        // })

        it('should return 200 ok', function () {
            return request(server)
                .post('/api/snacks')
                .send({ name: 'coffee', count: 3 })
                .then(response => {
                    console.log('response', response.status)
                    expect(response.status).toBe(201)
                })
        })

        it('should insert snacks into the db', async () => {
            await Snacks.insert({ name: "gummy", count: 4 });
            await Snacks.insert({ name: "chocolate", count: 2 });

            const addedSnacks = await db('snacks');
            expect(addedSnacks).toHaveLength(2);
        })

        it('should add a single snack', async () => {
            let snack = await Snacks.insert({ name: "bean", count: 674 })
            expect(snack.name).toBe('bean')
            expect(snack.count).toBe(674)

            snack = await Snacks.insert({ name: "orange", count: 6 })
            expect(snack.name).toBe('orange')
            expect(snack.count).toBe(6)
        })
    })

    describe('remove', () => {
        it('should remove a snack from the db', async () => {
            await Snacks.remove(1)
            const newSnacks = await Snacks.getAll()
            // console.log('snacks', newSnacks)
            expect(newSnacks).toHaveLength(1)
        })
    })
})






// const request = require("supertest");
// const server = require("../api/server");

// describe("dogsRouter.js", function () {




//     describe("DELETE /:id", function () {
//         it("should return a Json", function () {
//             return request(server) //make sure to put return
//                 .delete("/:id")

//                 .then(res => {
//                     expect(res.type).toMatch(/text/i);
//                 });
//         });
//         it("should return a 404", function () {
//             return request(server) //make sure to put return
//                 .delete("/9")
//                 .send({
//                     name: "andrew",
//                     breed: "dog"
//                 })
//                 .then(res => {
//                     expect(res.status).toBe(404);
//                 });
//         });
//     });
// });