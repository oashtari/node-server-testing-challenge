
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('snacks')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
        { name: 'jerky', count: 6 },
        { name: 'pemmican', count: 13 },
        { name: 'grapefruit', count: 2 },
        { name: 'onion', count: 231 }
      ]);
    });
};

