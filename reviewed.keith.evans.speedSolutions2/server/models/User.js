const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const SALT = 10;

const UserSchema = new Schema({
  loggedIn: Boolean,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  address: String,
  city: String,
  State: String,
  zip: String,
  partRefId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part' }],
  emailRefId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Email' }],
},
{ timestamps: {} });

/*  Hash user password before saving  */
UserSchema.pre('save', function (next) {
  const user = this;
  // Create salt string
  bcrypt.genSalt(SALT, (err, salt) => {
    // If err, return
    if (err) return next(err);
    // Hash password and save
    bcrypt.hash(user.password, salt, (error, hash) => {
      // If err, return
      if (error) return next(error);
      user.password = hash;
      next(); // Proceed with the next operation
    });
  });
});

/*  Compare login password with user's password from the database  */
UserSchema.methods.comparePassword = function (loginPass, callBack) {
  // Use bcrypt to compare and decrypt password in the db.
  bcrypt.compare(loginPass, this.password, (err, isMatch) => {
    // If err, then return the error
    if (err) return callBack(err);
    // Return isMatch parameter (true or false)
    callBack(null, isMatch);
  });
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
