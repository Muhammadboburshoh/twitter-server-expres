import { row } from '../../pg'

const model = {
  signin: ({ username, password }) => {

    const SQL = `
      select
        user_id, username
      from users
      where username = $1 and password = crypt($2, password)
    `
    return row(SQL, username, password)
  }
}

export default model