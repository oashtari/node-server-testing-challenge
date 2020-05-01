const db = require('../data/db-config');

module.exports = {
    insert,
    // update,
    remove,
    getAll,
    findById,
};


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



