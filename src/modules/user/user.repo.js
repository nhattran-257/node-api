// src/modules/user/user.repo.js
import { sql } from '../../shared/db.js'

export const userRepo = {
  async findAll() {
    return sql`
      SELECT id, email, created_at
      FROM "db_User"
      ORDER BY created_at DESC
    `
  },

  async findById(id) {
    const [user] = await sql`
      SELECT id, email, created_at
      FROM "db_User"
      WHERE id = ${id}
      LIMIT 1
    `
    return user || null
  },

  async create({ email, password }) {
    const [user] = await sql`
      INSERT INTO "db_User" (email, password)
      VALUES (${email}, ${password})
      RETURNING id, email, created_at
    `
    return user
  }
  
}
