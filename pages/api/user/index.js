import { getUsers } from "lib/mongo/users";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      // const { users, error } = await getUsers();
      // if (error) throw new Error(error);
      return res.status(200).json({ ...req });
    } catch (error) {
      return res.status(500).json({ error: "oops" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(425).end("method not allowed");
};

export default handler;
