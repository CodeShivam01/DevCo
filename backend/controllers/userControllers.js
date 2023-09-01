const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
// const { protect } = require("../middleware/authMiddleware");





const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter All the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const users = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (users) {
    res.status(201).json({
      id: users.id,
      name: users.name,
      email: users.email,
      pic: users.pic,
      token: generateToken(users.id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const users = await User.findOne({ email });

  if (users && (await users.matchPassword(password))) {
    res.json({
      id: users.id,
      name: users.name,
      email: users.email,
      pic: users.pic,
      token: generateToken(users.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email and Password");
  }
});




// /api/user?search
const allUsers = asyncHandler( async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};


 console.log("Received request with search keyword:", keyword);
console.log("Received search query:", req.query.search);

  const users = await User.find(keyword).find({ _id: { $ne: req.user.id } });
  // const users = await User.find(keyword);
    // console.log("Authenticated user ID:", req.user._id);
  res.send(users);
  console.log("Users CGL",users)
});











module.exports = { registerUser, authUser, allUsers };


