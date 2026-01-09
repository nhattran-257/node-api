import 'dotenv/config'   // phải đứng đầu
import postgres from 'postgres'

console.log('DB URL:', process.env.DATABASE_URL) // TEST

export const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' })
