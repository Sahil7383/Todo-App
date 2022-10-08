const secret = "fnAEyYT19lACSWOSEdWhJlrKQHRe1PSGjU3b4f88";

const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({ secret, domain: "db.fauna.com" });

module.exports = async (req, res) => {
  try {
    const dbs = await client.query(
      q.Map(q.Paginate(q.Match(q.Index("todos-index"), true)), (ref) =>
        q.Get(ref)
      )
    );

    res.status(200).json({ todos: dbs.data });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
