import mongoose from "mongoose"
import bcrypt from 'bcryptjs';
import User from "../models/User.js"
import AsyncHandler from "express-async-handler";
import {generateToken} from "../utils/jwt.js"


const registerUser = AsyncHandler(async(req, res, next) => {
    const { username, email, phonenumber, password } = req.body;

  if (!username || !email || !phonenumber || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const userExists = await User.findOne({ where: {email} });
  if (userExists) {
    const error = new Error("User already exists");
    error.statusCode = 400;
    return next(error)
  }

  
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

 
  const user = await User.create({
    username,
    email,
    phonenumber,
    password: hashedPassword
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.usernmae,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

})
const loginUser = AsyncHandler(async(req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: {email} });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
})

const getCurrentUser = AsyncHandler(async(req, res) => {
  console.log(req.user)
  return res.json({...req.user});
})

export {registerUser, loginUser, getCurrentUser}
 

