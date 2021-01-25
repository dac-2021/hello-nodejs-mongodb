// Modern Operator
const { MongoClient } = require("mongodb");

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "todoapp";

const addTodo = async () => {
  // Step 1
  const client = new MongoClient(DB_URL);

  // S2
  await client.connect();

  // S3
  const db = client.db(DB_NAME);

  // S4 :: Important
  await db
    .collection("todo")
    .insert({ id: 3, task: "Chennai", complete: false });

  // S5
  client.close();
};

const readAllTodo = async () => {
  const client = new MongoClient(DB_URL);
  await client.connect();
  const db = client.db(DB_NAME);

  // bad example
  const list = await db.collection("todo").find().toArray();

  list.forEach((item, index) => console.log(item));
  client.close();
};

module.exports = {
  addTodo: addTodo,
  readAllTodo: readAllTodo,
};
