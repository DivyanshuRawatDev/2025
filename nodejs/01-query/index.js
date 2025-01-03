const express = require("express");
const { connectDatabase } = require("./db/db");
const { UserModal } = require("./modal/User.modal");

const app = express();

app.use(express.json());

app.post("/add", async (req, res) => {
  const { email, name, password } = req.body;
  try {
    await UserModal.create({ name, email, password });

    await UserModal.save;

    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/get", async (req, res) => {
  const { email, name } = req.body;
  try {
    const user = await UserModal.find({
      $and: [{ email: email }, { name: name }],
    });
    res.status(201).json({ message: "User updated successfully", user: user });
  } catch (error) {
    console.log(error);
  }
});

connectDatabase()
  .then(() => {
    app.listen(8080, () => {
      console.log("app is running on " + 8080);
    });
    console.log("db is connexted");
  })
  .catch((err) => {
    console.log(err);
  });
