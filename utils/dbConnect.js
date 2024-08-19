const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

module.exports = dbConnect;
