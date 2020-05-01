const db = require('../data/db-config');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};


async function insert(snack) {
    const [id] = await db('snacks').insert(snack, 'id');
    return db('snacks').where({ id }).first()
}



async function update(id, changes) {
    return null;
}

function remove(id) {
    return db('snacks')
        .where({ id })
        .delete()
}

function getAll() {
    return db('snacks');
}

function findById(id) {
    return null;
}



// const db = require('../database/db-config')

// async function add(color) {
//     const [id] = await db('color').insert(color)
//     return findById(id)
// }

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