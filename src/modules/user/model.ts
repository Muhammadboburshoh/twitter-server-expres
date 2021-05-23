import { row, rows } from '../../pg'

const model = {
  signin: ({ username, password }) => {

    const SQL = `
      select
        user_id, username
      from users
      where username = $1 and password = crypt($2, password)
    `
    return row(SQL, username, password)
  },

  many: () => {
    const SQL = `
      select
        username,
        extract(year from joined_at) as since
      from users
    `

    return rows(SQL)

  }
}

export default model