const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewURlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`successful connection : ${conn.connection.host} `);
  } catch (error) {
    console.log(`Error : ${error.message} `);
    process.exit();
  }
};

module.exports = connectDB;
