import clientPromise from "/lib/mongo/index.js";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("cluster");

  switch (req.method) {
    case "POST":
      const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
      let bodyObject = req.body;
      const inObject = { ip: ip, infoArray: bodyObject };

      //inserting into DB
      // let myPost = await db.collection("users").insertOne({ inObject });
      //inserting into DB

      //  clearing DB
      // let myPost = await db.collection("users").deleteMany({});
      //  clearing DB

      //displaying DB
      let myPost = await db.collection("users").find({}).toArray(); 
      //displaying DB

      res.json(myPost);
      break;
    case "GET":
      const allPosts = await db.collection("allPosts").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
