import clientPromise from "/lib/mongo/index.js";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("project");

  switch (req.method) {
    case "GET":
      let bucket = req.body.bucket;

      let graphPoints = await db.collection("graphPoints").find().toArray();
      // console.log(graphPoints);
      res.json(graphPoints);

      break;
  }
}
