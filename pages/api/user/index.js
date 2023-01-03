import clientPromise from "/lib/mongo/index.js";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("cluster");

  switch (req.method) {
    case "POST":
      console.log("HELLO----------------------------");
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("users").find();
      res.json(myPost);
      break;
    case "GET":
      const allPosts = await db.collection("allPosts").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
