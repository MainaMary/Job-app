const UserModel = require("../models/User");

const login = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(200).send("user logged in");
};
const register = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    console.log(user, "user");
    res.status(201).json({ user });
    //res.send(user);
  } catch (error) {
    console.log(error.message);
  }
  res.status(200).send(req.body);
};

const updateUser = (req, res) => {
  res.status(200).send("update user");
};

const getAllUsers = async (req, res) => {
  const response = await UserModel.find();
  res.status(200).send(response);
};
module.exports = { login, register, updateUser, getAllUsers };
