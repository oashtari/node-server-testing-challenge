
exports.up = function (knex) {
    return knex.schema.createTable('snacks', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();
        tbl.integer('count').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('snacks');
};

