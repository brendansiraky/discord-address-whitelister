import { knex } from 'knex'
import { config } from './config'

const { PG_HOST, PG_DATABASE_NAME, PG_USER, PG_DATABASE_PASSWORD } = config

export const knexConfig = knex({
    client: 'pg',
    connection: {
        host: PG_HOST,
        database: PG_DATABASE_NAME,
        user: PG_USER,
        password: PG_DATABASE_PASSWORD
    },
    useNullAsDefault: true
})