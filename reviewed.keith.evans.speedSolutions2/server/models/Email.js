const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmailSchema = new Schema({
  new: Boolean,
  recievedFrom: String,
  recievedFromId: String,
  recievedFromEmail: String,
  question: String,
  questionSubject: String,
  dateSent: String,
},
{ timestamps: {} });

const Part = mongoose.model('Email', EmailSchema);

module.exports = Part;
