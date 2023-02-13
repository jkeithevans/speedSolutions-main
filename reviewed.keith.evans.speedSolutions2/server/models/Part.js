const mongoose = require('mongoose');

const { Schema } = mongoose;

const PartsSchema = new Schema({
  part: String,
  category: String,
  price: String,
  vehicle: String,
  description: String,
  date: String,
  userRefId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},
{ timestamps: {} });

const Part = mongoose.model('Part', PartsSchema);

module.exports = Part;
