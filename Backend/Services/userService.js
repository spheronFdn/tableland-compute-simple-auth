const db = require("../config/dbConfig");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const securityKey = "12345@Ra";
const tableName = ""; // This is your specific table name
//user_information_80001_7788

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const { results } = await db
    .prepare(`SELECT * FROM ${tableName} WHERE email = ?;`)
    .bind(email)
    .all();

  if (results.length === 0) {
    res.json({
      status: 400,
      message: "user not matched",
    });
  } else {
    if (await bcrypt.compare(password, results[0].password)) {
      const auth = jwt.sign({ data: results[0] }, securityKey);
      res.json({
        status: 200,
        message: "Login success",
        token: auth,
      });
    } else {
      res.json({
        status: 400,
        message: "Please check the password",
      });
    }
  }
};

const userSignup = async (req, res) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashpwd = await bcrypt.hash(password, salt);

  const { results } = await db
    .prepare(`SELECT * FROM ${tableName} WHERE email = ?;`)
    .bind(email)
    .all();

  if (results.length > 0) {
    res.json({
      status: 400,
      message: "User already exists",
    });
  } else {
    try {
      const { meta: insert } = await db
        .prepare(
          `INSERT INTO ${tableName} (username, email, password) VALUES (?, ?, ?);`
        )
        .bind(username, email, hashpwd)
        .run();

      await insert.txn.wait();

      res.json({
        status: 200,
        message: `Successfully registered ${username}`,
      });
    } catch (error) {
      res.json({
        status: 400,
        message: error,
      });
    }
  }
};

module.exports = { userSignup, userLogin };
