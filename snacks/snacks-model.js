const db = require('../data/db-config');

module.exports = {
    insert,
    // update,
    remove,
    getAll,
    findById,
};


// async function insert(snack) {
//     const [id] = await db('snacks').insert(snack, 'id');
//     return db('snacks').where({ id }).first()
// }

// async function add(color) {
//     const [id] = await db('color').insert(color)
//     return findById(id)
// }

function insert(snack) {
    return db("snacks")
        .insert(snack, "id")
        // .where({ id })
        // .first()
        .then(ids => {
            const [id] = ids;

            return findById(id);
        });
}

// async function update(id, changes) {
//     return null;
// }

function remove(id) {
    return db('snacks')
        .where({ id })
        .delete()
}

function getAll() {
    return db('snacks');
}

function findById(id) {
    return db('snacks')
        .where({ id })
        .first()
}



// const db = require('../database/db-config')



// function list() {
//   return db('color')

// }

// async function findById(id) {    
//     return db('color')
//         .where({ id })
//         .first()
// }

// async function update(id, update) {
//     await db('color')
//         .where({ id })
//         .update(update)
//     return findById(id)
// }

// function destroy(id) {
//     return db('color').where({ id }).del()
// }


// module.exports = {
//     add,
//     list,
//     findById,
//     update,
//     destroy,
// }

// const db = require('../data/db-config');

// module.exports = {
//     find,
//     findBy,
//     findById,
//     add,
//     remove
// }

// function find() {
//     return db('departments')
// };

// function findBy(filter) {
//     return db('departments')
//         .where(filter)
// };

// function findById(id) {
//     return db('departments')
//         .where({ id })
// };

// function add(newDept) {
//     return db('departments')
//         .insert(newDept)
// };

// function remove(id) {
//     return db('departments')
//         .where({ id })
//         .delete()
// };