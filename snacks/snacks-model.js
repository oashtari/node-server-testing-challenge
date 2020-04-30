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
    return null;
}

function getAll() {
    return db('snacks');
}

function findById(id) {
    return null;
}
