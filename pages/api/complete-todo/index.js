const secret = "fnAEyYT19lACSWOSEdWhJlrKQHRe1PSGjU3b4f88";

const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({ secret, domain: "db.fauna.com" });

module.exports = async (req, res) => {
  const id = req.body.data.id;
  try {
    const dbs = await client.query(
      q.Update(q.Ref(q.Collection("todos"), id), {
        data: { done: true, updatedAt: Date.now() },
      })
    );

    res.status(200).json({ todos: dbs.data });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
