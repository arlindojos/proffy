import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'my-password',
        database : 'proffydb'
    },
    searchPath: ['knex', 'public'],
})

export default db;