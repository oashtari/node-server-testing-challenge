const db = require('../data/db-config');

const Snacks = require('./snacks-model');

describe('snacks model', () => {
    describe('insert()', () => {

        beforeEach(async () => {
            await db('snacks').truncate();
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
            console.log('snacks', newSnacks)
            expect(newSnacks).toHaveLength(1)
        })
    })
})






