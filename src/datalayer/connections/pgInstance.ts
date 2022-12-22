import pgPromise from 'pg-promise'

const pg = pgPromise({ })

const db = pg('postgresql://postgres:postgres@localhost:5432/TestingDB')

export default db
