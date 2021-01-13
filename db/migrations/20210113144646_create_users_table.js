exports.up = knex => knex.schema.createTable('users', table => {
  table.increments();
  table.string('name').notNullable();
  table.string('email').unique().notNullable();
  table.string('password').notNullable();
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('users');
