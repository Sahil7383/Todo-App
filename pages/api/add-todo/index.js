const secret = "fnAEyYT19lACSWOSEdWhJlrKQHRe1PSGjU3b4f88";

const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({ secret, domain: "db.fauna.com" });

module.exports = async (req, res) => {
  console.log(req.body);
  const { title, note } = req.body.data;

  try { 
    const dbs = await client.query(
      q.Create(q.Collection("todos"), { 
        data: {
          title: title,
          note: note,
          done: false,
        },
      })
    );
    res.status(200).json(dbs.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
