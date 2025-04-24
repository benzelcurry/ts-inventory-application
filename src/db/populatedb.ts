import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR ( 255 ) NOT NULL
);

INSERT INTO categories (category) VALUES
  ('Weapons'),
  ('Armor'),
  ('Summons')
;

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  item VARCHAR ( 255 ) NOT NULL,
  category_id INTEGER NOT NULL REFERENCES categories(id)
);

INSERT INTO items (item, category_id) VALUES
  -- Weapons (category_id = 1)
  ('Brotherhood', 1),
  ('Celestial Sword', 1),
  ('Godhand', 1),
  ('Onion Knight', 1),
  ('Masamune', 1),
  ('Nirvana', 1),

  -- Armor (category_id = 2)
  ('Tetra Armor', 2),
  ('Dragon Armlet', 2),
  ('Crystal Shield', 2),
  ('Mirage Armlet', 2),
  ('Genji Shield', 2),

  -- Summons (category_id = 3)
  ('Valefor', 3),
  ('Ifrit', 3),
  ('Ixion', 3),
  ('Shiva', 3),
  ('Bahamut', 3),
  ('Yojimbo', 3),
  ('Anima', 3),
  ('The Magus Sisters', 3)
;
`;

async function main() {
  console.log("seeding database . . .");

  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PW}@localhost:5432/inventory_application`,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("database seeding complete");
  } catch (err) {
    console.log("error seeding database:");
    console.log(err);
  } finally {
    await client.end();
  }
}

main();
