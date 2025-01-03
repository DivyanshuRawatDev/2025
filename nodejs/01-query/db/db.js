const mongoose = require("mongoose");

const connectDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://divyanshurawatdev:ML05a09d%40123@cluster0.2larfwk.mongodb.net/"
  );
};

module.exports = {
  connectDatabase,
};
