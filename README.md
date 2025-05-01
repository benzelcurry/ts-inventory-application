# (Typescript) Inventory Application

A simple inventory application written with Typescript and Express. This app serves to demonstrate basic CRUD functionality using purely backend technologies.

To run this app, you will need to have Node and PostgreSQL installed on your device. You can follow these steps to interact with the application:

1. Clone the repo and navigate to the root level of its directory
2. Run `npm i`
3. Run `npm run build`
4. Create a `.env` file containing the appropriate `DB_USER`, `DB_PW`, and `DB_NAME` variables you'll be using for your local Postgres database
5. (Optional) Run `node dist/db/populatedeb.js` to populate the database with seed data
6. Run `npm run start`
7. Open the localhost port your application is running on in a browser
8. Interact with items at `localhost:<yourport>/items`
9. Interact with categories at `localhost:<yourport>/categories`
