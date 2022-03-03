
exports.up = function(knex) {
    return knex.schema
    .createTable('mynumbers', table =>{
        table.increments('id')
        table.integer('number')
        table.integer('name')
    })
  };
  
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('mynumbers')
  };
  