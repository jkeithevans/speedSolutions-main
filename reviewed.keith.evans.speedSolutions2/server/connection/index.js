const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/speedSolutions2';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => console.log(`Mongoose Connected to ${connectionString}`));

mongoose.connection.on('error', () => console.log(`Mongoose Connection Error ${err.message}`));

mongoose.connection.on('disconnected', () => console.log('Mongoose Disconnected'));
