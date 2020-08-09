import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'my-password',
        database : 'proffydb'
    },
    searchPath: ['knex', 'public'],
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
}