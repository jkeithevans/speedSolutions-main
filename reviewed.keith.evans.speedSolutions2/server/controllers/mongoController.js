const User = require('../models/User');
const Part = require('../models/Part');
const Email = require('../models/Email');

// need to split into user controller, parts controller, email controller

const addPart = async (req, res) => {
  const { userId } = req.params;
  try {
    const part = await Part.create(req.body);
    await User.findByIdAndUpdate(userId, { $addToSet: { partRefId: part._id } }, { new: true });
    return res.status(200).json(part);
  } catch (err) {
    return res.status(500).json({ error: error.message });
  }
};

const findByCategory = async (req, res) => {
  const { categoryName } = req.params;
  try {
    const parts = await Part.find({ category: categoryName });
    return res.status(200).json(parts);
  } catch (err) {
    return res.status(500).json({ error: error.message });
  }
};

const allParts = async (req, res) => {
  try {
    const parts = await Part.find();
    parts.sort((a, b) => (b.createdAt - a.createdAt));
    return res.status(200).json(parts);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const viewPart = async (req, res) => {
  const { id } = req.params;
  try {
    const part = await Part.findById(id).populate('userRefId')
    // Keep this nested populate for future
    // .populate({
    //   path: 'userRefId',
    //   populate: { path : 'emailRefId'}
    // });
    console.log('id in viewPart controller', part);
    const context = {
      email: part.userRefId.email,
      userId: part.userRefId._id,
      userName: part.userRefId.userName,
      part: part.part,
      price: part.price,
      vehicle: part.vehicle,
      description: part.description,
      datePosted: part.createdAt.toString().slice(0, 10),
    };
    return res.status(200).json({ context });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const attachEmail = async (req, res) => {
  const { id } = req.params;
  const email = req.body;
  // console.log
  try {
    const newEmail = await Email.create(email);
    const user = await User.findByIdAndUpdate(id, { $push: { emailRefId: newEmail._id } }, { new: true });
    // const user = await User.findByIdAndUpdate(id, { $push: { partQuestions: email } });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const removeViewedEmail = async (req, res) => {
  const { id } = req.params;
  try {
    const oldEmail = await Email.findByIdAndUpdate(id, { new: false }, { new: true });
    await console.log('in removeViewed Email', oldEmail)
    // const dateSent = req.params.date;
    // const user = await User.findOne({ 'partQuestions.dateSent': dateSent });
    // await user.partQuestions.filter((date, idx) => {
    //   if (dateSent === date.dateSent) {
    //     const obj = { ...date, new: false };
    //     return res.status(200).json({ user: obj });
    //   }
    // });
  } catch (error) {
    console.log('error', error);
  }
};

const createNewUser = async (req, res) => {
  try {
    const { email } = req.body;
    // Check and see if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({
        success: false,
        message: 'User already registered. Please log in.',
      });
    }
    // Create a new user if new user
    const createdUser = await User.create(req.body);
    return res.status(200).json({
      createdUser,
      success: true,
      message: 'Created user successfully.',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed creating user, something went wrong.',
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('email ', email);
    const user = await User.findOne({ email }).populate('emailRefId');
    // Check to see if user exists
    if (!user) {
      return res.status(200).json({
        success: false,
        message: 'User does not exist.',
      });
    }
    //   // Proceed with the login
    user.comparePassword(password, async (err, isMatch) => {
      // Check to see if any errors are present
      if (err) {
        return res.status(200).json({
          success: false,
          message: 'Something went wrong during login.',
        });
      }
      // Check to see if the password was a match
      if (!isMatch) {
        return res.status(200).json({
          success: false,
          message: 'Enter a Valid Password',
        });
      }
      console.log(user);
      return res.status(200).json({
        user,
        success: true,
        message: 'Successful login.',
      });
      // return res.status(200).json({ success: true, token: token, message: "Successful login." });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'Failed logging in user, something went wrong.' });
  }
};

module.exports = {
  addPart,
  findByCategory,
  allParts,
  viewPart,
  attachEmail,
  removeViewedEmail,
  createNewUser,
  loginUser,
};
// getUser = async (req, res) => {
//   try {
//     // Check to see if user exists
//     const user = await User.findOne({ _id: req.user }).select('email password');
//     // Check to see if user exists or err
//     if (!user) {
//       return res.status(500).json({ success: false, message: "Something went wrong." });
//     }
//     // Return user to FE
//     res.status(200).json({ success: true, user: user });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ success: false, message: "Something went wrong." })
//   }
// }

//   getList(req, res) {
//     List.find()
//       .then(items => res.json(items))
//       .catch()
//   },

//   // Delete a specific list item
//   deleteItem(req, res) {
//     const { itemId } = req.params
//     List.findByIdAndRemove(itemId)
//       .then(result => res.json(result))
//       .catch()
//   },

//   getListItem(req, res) {
//     const { itemId } = req.params
//     List.findById({ _id: itemId })
//       .then(items => {
//         console.log(items);
//         res.json(items)
//       })
//       .catch()
//   },
// }

// User.create(userProps)
//   .then( user => res.json(user) )
//   .catch( err => (err) )

// let fields = user.populate(partRefId)
// req.session.userId = user._id;  user session storage
// await user === null
//   ? res.status(200).send(user)
//   : password === user.password
//     ? res.json(user)
//     : res.json('wrong')

// if (user === null) {
//   res.status(200).json(user)
// } else if (password === user.password) {
//   console.log('in password == user.password', user)
//   res.status(200).json(user)
// } else {
//   res.json('wrong')
// }

// Part.create(partProps)
//   .then(part => {
//     User.findByIdAndUpdate(userId, { $addToSet: { partRefId: part._id } }, { new: true })
//       .then(user => console.log(user));
//     res.json(part);
//   })
//   .catch(err => (err))

// Part.find({ category: categoryName })
//   .then(parts => res.json(parts))
//   .catch(err => (err))

// Part.find()
//   .then(part => res.json(
//     part.sort((a, b) => {
//       if (a.createdAt < b.createdAt) return 1;
//       if (a.createdAt > b.createdAt) return -1;
//       return 0;
//     })
//   ))
//   .catch(err => (err))

// Part.findById(id)
//   .populate('userRefId') // Now i can fix the context
//   .then(part => { // change this then to an exec
//     let findUser = part.userRefId[0]
//     let datePosted = part.createdAt.toString().slice(0, 10)
//     User.findById(findUser)
//       .then(user => {
//         const context = {
//           email: user.email,
//           userId: user._id,
//           userName: user.userName,
//           part: part.part,
//           price: part.price,
//           vehicle: part.vehicle,
//           description: part.description,
//           datePosted: datePosted
//         }
//         res.json(context);
//       })
//   })
//   .catch(err => (err))

// console.log('email:', email)
// User.findByIdAndUpdate(id, { $push: { partQuestions: email } })
//   .then(user => res.json(user))
//   .catch(err => (err))
