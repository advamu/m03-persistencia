const mongoose = require("mongoose");

require("dotenv").config();

let mongoConnection = null;

const connectDB = async () => {
  const username = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASSWORD;
  const host = process.env.MONGODB_HOST;
  const port = process.env.MONGODB_PORT;
  const database = process.env.MONGODB_DATABASE;
  let connectionString = ``;

if(port){
   connectionString = `mongodb://${username}:${password}@${host}:${port}/${database}`;
}
else {
    connectionString = `mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`;
}
  return await mongoose.connect(connectionString);
};

const getConnection = async () => {
  if (!mongoConnection) {
    mongoConnection = await connectDB();
  }
  return mongoConnection;
};

const disconnectDB = async () => {
  if (mongoConnection) {
    await mongoose.connection.close();
  }
};

module.exports = { getConnection, disconnectDB };
