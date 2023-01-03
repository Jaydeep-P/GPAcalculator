import clientPromise from "/lib/mongo/index.js";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("project");

  switch (req.method) {
    case "POST":
      const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
      let bodyObject = req.body.infoArray;
      let gpa = req.body.gpa;
      let time = await Date.now();
      let bucket = req.body.bucket;
      const inObject = { ip: ip, infoArray: bodyObject, time: time, gpa: gpa };

      //initializing bucket array
      const resetArray = [
        { bucketIndex: 0, numPeople: 0 },
        { bucketIndex: 1, numPeople: 0 },
        { bucketIndex: 2, numPeople: 0 },
        { bucketIndex: 3, numPeople: 0 },
        { bucketIndex: 4, numPeople: 0 },
        { bucketIndex: 5, numPeople: 0 },
        { bucketIndex: 6, numPeople: 0 },
        { bucketIndex: 7, numPeople: 0 },
        { bucketIndex: 8, numPeople: 0 },
        { bucketIndex: 9, numPeople: 0 },
        { bucketIndex: 10, numPeople: 0 },
        { bucketIndex: 11, numPeople: 0 },
        { bucketIndex: 12, numPeople: 0 },
        { bucketIndex: 13, numPeople: 0 },
        { bucketIndex: 14, numPeople: 0 },
        { bucketIndex: 15, numPeople: 0 },
        { bucketIndex: 16, numPeople: 0 },
        { bucketIndex: 17, numPeople: 0 },
        { bucketIndex: 18, numPeople: 0 },
        { bucketIndex: 19, numPeople: 0 },
        { bucketIndex: 20, numPeople: 0 },
        { bucketIndex: 21, numPeople: 0 },
        { bucketIndex: 22, numPeople: 0 },
        { bucketIndex: 23, numPeople: 0 },
        { bucketIndex: 24, numPeople: 0 },
        { bucketIndex: 25, numPeople: 0 },
      ];
      //initializing bucket array

      //inserting into DB
      let dataPost = await db.collection("users").insertOne({ inObject });
      let bucketPost = await db.collection("graphPoints").insertOne({});
      //inserting into DB

      //  clearing DB
      // let dataPost = await db.collection("users").deleteMany({});
      //  clearing DB

      //displaying DB
      // let dataPost = await db.collection("users").find({}).toArray();
      //displaying DB

      res.json(dataPost);
      break;
    case "GET":
      const allPosts = await db.collection("allPosts").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
