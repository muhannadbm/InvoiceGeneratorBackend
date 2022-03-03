// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 const sharedConfig = {
  client: 'postgresql',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  // this enables foreign keys in SQLite
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done),
      conn.run('PRAGMA journal_mode = "OFF"') 
    },
  },
}
module.exports = {

  development: {
  //   ...sharedConfig,
  //   connection: {
  //     filename: 'data/migrations/dev.sqlite3'
  //   }
  // },
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user:     'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
},

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },

  },

  production: {
    client: 'pq',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    }
  }

};
