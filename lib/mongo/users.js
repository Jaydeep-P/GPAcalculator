import clientPromise from ".";

let client;
let db;
let users;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    users = await db.collection("project");
  } catch (error) {
    throw new Error("Failed to establish connection.");
  }
}

(async () => {
  await init();
})();

export async function getUsers() {
  try {
    if (!movies) await init();
    const result = await users.find().toArray();

    return result;
  } catch (error) {
    return "Error.";
  }
}
