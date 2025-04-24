import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: "localhost",
  user: process.env.DB_USER,
  database: process.env.NAME,
  password: process.env.DB_PW,
  port: 5432,
});

export default pool;
