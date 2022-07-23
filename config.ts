import dotenv from 'dotenv'

dotenv.config()

export const config = {
    TOKEN: process.env.TOKEN,
    SERVER_ID: process.env.SERVER_ID,
    ROLE_ID: process.env.ROLE_ID,

    PG_HOST: process.env.PG_HOST,
    PG_DATABASE_NAME: process.env.PG_DATABASE_NAME,
    PG_USER: process.env.PG_USER,
    PG_DATABASE_PASSWORD: process.env.PG_DATABASE_PASSWORD
}