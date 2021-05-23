import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const host = process.env.PG_HOST || 'localhost'
const user = process.env.PG_USER || 'postgres'
const password = process.env.PG_PWD || ''
const database = process.env.PG_DATABASE || 'postgres'
const port = process.env.PG_PORT || '5432 '

const pool = new Pool({
  host,
  user,
  password,
  database,
  port
})

const rows = async (SQL, ...params) => {

  const clint = await pool.connect()
  try {
    const { rows } = await clint.query(SQL, params)
    return rows
  } catch (e) {
    console.error(e)
  }
  finally {
    clint.release()
  }
}

const row = async (SQL, ...params) => {

  const clint = await pool.connect()
  try {
    const { rows: [row] } = await clint.query(SQL, params)
    return row
  } catch (e) {
    console.error(e)
  }
  finally {
    clint.release()
  }
}

export {
  row, rows
}