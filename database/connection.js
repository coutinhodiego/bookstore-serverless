const mongoose = require('mongoose');

let hasConnection = false;

const createConnection = async (uri = process.env.MONGO_URI) => {
    if (hasConnection) return;
    const connection = await mongoose.connect(uri);
    hasConnection = true;
    return connection;
}

mongoose.connection.on('connected', () => {
  console.log(`Mongo connected`);
})

mongoose.connection.on('disconnected', () => {
  console.log(`Mongo has disconnected`);
  hasConnection = false;
})

module.exports = { createConnection };
