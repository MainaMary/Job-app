const {
  login,
  register,
  updateUser,
  getAllUsers,
} = require("../controllers/authController");
const express = require("express");
const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").put(updateUser);
router.route("/getAllusers").get(getAllUsers);

module.exports = router;
