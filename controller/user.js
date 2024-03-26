// // // // const User = require("../models/user");
// // // // const bcrypt = require("bcrypt");
// // // // const mongoose = require("mongoose");
// // // // const jwt = require('jsonwebtoken');

// // // // const getAllUsers = async (req, res) => {
// // // //   try {
// // // //     const users = await User.find({});
// // // //     const mappedUser = users.map((element) => {
// // // //       return {
// // // //         name: element.name,
// // // //         email: element.email,
// // // //         password: element.password,
// // // //         role: element.role,
// // // //       };
// // // //     });
// // // //     res.send(mappedUser);
// // // //   } catch (e) {
// // // //     console.log(e);
// // // //   }
// // // // };

// // // // // const login = async (req, res) => {
// // // // //   const { email, password } = req.body;

// // // // //   try {
// // // // //     const user = await User.findOne({ email: email });
// // // // //     if (!user) return res.status(400).json({ message: "Email doesn't exist" });

// // // // //     const isMatch = await bcrypt.compare(password, user.password);
// // // // //     if (!isMatch) return res.status(400).json({ message: "Invalid password" });

// // // // //     res.status(200).json({ message: "Login successful" });

// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: "Internal server error" });
// // // // //   }
// // // // // };


// // // // const login = async (req, res) => {
// // // //   const { email, password } = req.body;

// // // //   try {
// // // //     const user = await User.findOne({ email: email });
// // // //     if (!user) return res.status(400).json({ message: "Email doesn't exist" });

// // // //     const isMatch = await bcrypt.compare(password, user.password);
// // // //     if (!isMatch) return res.status(400).json({ message: "Invalid password" });
// // // //     const token = jwt.sign({ email: user.email, role: user.role }, process.env.SECRET_KEY, { expiresIn: "1h" });
// // // //     res.cookie("token", token);
// // // //     res.status(200).json({ message: "Login successful", role: user.role },);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: "Internal server error" });
// // // //   }
// // // // };


// // // // const register = async (req, res) => {
// // // //   try {

// // // //     console.log(req);
// // // //     const data = req.body;
// // // //     console.log("Data", data);

// // // //     const hashedPassword = await bcrypt.hash(data.password, 10);

// // // //     const phoneNum = Number(data.phone);

// // // //     const dobDate = new Date(data.dob);

// // // //     const user = new User({
// // // //       name: data.name,
// // // //       email: data.email,
// // // //       password: hashedPassword,
// // // //       dob: dobDate,
// // // //       phone: phoneNum,
// // // //       role: data.role,
// // // //     });

// // // //     await user.save();

// // // //     console.log("user added");

// // // //     res.send({ msg: "user added", id: user._id });
// // // //   } catch (e) {
// // // //     console.log(e);
// // // //   }
// // // // };

// // // // module.exports = {
// // // //   getAllUsers,
// // // //   login,
// // // //   register,
// // // // };











// // // const User = require("../models/user");
// // // const bcrypt = require("bcrypt");
// // // const mongoose = require("mongoose");
// // // const jwt = require("jsonwebtoken");

// // // const getAllUsers = async (req, res) => {
// // //   try {
// // //     const users = await User.find({});
// // //     const mappedUser = users.map((element) => {
// // //       return {
// // //         name: element.name,
// // //         email: element.email,
// // //         password: element.password,
// // //         role: element.role,
// // //       };
// // //     });
// // //     res.send(mappedUser);
// // //   } catch (e) {
// // //     console.log(e);
// // //   }
// // // };

// // // // const login = async (req, res) => {
// // // //   const { email, password } = req.body;

// // // //   try {
// // // //     const user = await User.findOne({ email: email });
// // // //     if (!user) return res.status(400).json({ message: "Email doesn't exist" });

// // // //     const isMatch = await bcrypt.compare(password, user.password);
// // // //     if (!isMatch) return res.status(400).json({ message: "Invalid password" });

// // // //     res.status(200).json({ message: "Login successful" });

// // // //   } catch (error) {
// // // //     res.status(500).json({ message: "Internal server error" });
// // // //   }
// // // // };

// // // const login = async (req, res) => {
// // //   const { email, password } = req.body;

// // //   try {
// // //     const user = await User.findOne({ email: email });
// // //     if (!user) return res.status(400).json({ message: "Email doesn't exist" });

// // //     const isMatch = await bcrypt.compare(password, user.password);
// // //     if (!isMatch) return res.status(400).json({ message: "Invalid password" });
// // //     const token = jwt.sign({ email: user.email, role: user.role }, "0af479bf", {
// // //       expiresIn: "1h",
// // //     });
// // //     res.cookie("token", token);
// // //     res.status(200).json({ message: "Login successful", user: user });
// // //   } catch (error) {
// // //     res.status(500).json({ message: "Internal server error" });
// // //   }
// // // };

// // // const register = async (req, res) => {
// // //   try {
// // //     console.log(req);
// // //     const data = req.body;
// // //     console.log("Data", data);

// // //     const hashedPassword = await bcrypt.hash(data.password, 10);

// // //     const phoneNum = Number(data.phone);

// // //     const dobDate = new Date(data.dob);

// // //     const user = new User({
// // //       name: data.name,
// // //       email: data.email,
// // //       password: hashedPassword,
// // //       dob: dobDate,
// // //       phone: phoneNum,
// // //       role: data.role,
// // //     });

// // //     await user.save();

// // //     console.log("user added");

// // //     res.send({ msg: "user added", id: user._id });
// // //   } catch (e) {
// // //     console.log(e);
// // //   }
// // // };

// // // module.exports = {
// // //   getAllUsers,
// // //   login,
// // //   register,
// // // };










// // const User = require("../models/user");
// // const bcrypt = require("bcrypt");
// // const mongoose = require("mongoose");
// // const jwt = require("jsonwebtoken");

// // const getAllUsers = async (req, res) => {
// //   try {
// //     const users = await User.find({});
// //     const mappedUser = users.map((element) => {
// //       return {
// //         name: element.name,
// //         email: element.email,
// //         password: element.password,
// //         role: element.role,
// //       };
// //     });
// //     res.send(mappedUser);
// //   } catch (e) {
// //     console.log(e);
// //   }
// // };

// // // const login = async (req, res) => {
// // //   const { email, password } = req.body;

// // //   try {
// // //     const user = await User.findOne({ email: email });
// // //     if (!user) return res.status(400).json({ message: "Email doesn't exist" });

// // //     const isMatch = await bcrypt.compare(password, user.password);
// // //     if (!isMatch) return res.status(400).json({ message: "Invalid password" });

// // //     res.status(200).json({ message: "Login successful" });

// // //   } catch (error) {
// // //     res.status(500).json({ message: "Internal server error" });
// // //   }
// // // };

// // const login = async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email: email });
// //     if (!user) return res.status(400).json({ message: "Email doesn't exist" });

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(400).json({ message: "Invalid password" });
// //     const token = jwt.sign({ email: user.email, role: user.role }, "0af479bf", {
// //       expiresIn: "1h",
// //     });
// //     res.cookie("token", token);
// //     res.status(200).json({ message: "Login successful", user: user });
// //   } catch (error) {
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // };

// // const register = async (req, res) => {
// //   try {
// //     console.log(req);
// //     const data = req.body;
// //     console.log("Data", data);

// //     const hashedPassword = await bcrypt.hash(data.password, 10);

// //     const phoneNum = Number(data.phone);

// //     const dobDate = new Date(data.dob);

// //     const user = new User({
// //       name: data.name,
// //       email: data.email,
// //       password: hashedPassword,
// //       dob: dobDate,
// //       phone: phoneNum,
// //       role: data.role,
// //     });

// //     await user.save();

// //     console.log("user added");

// //     res.send({ msg: "user added", id: user._id });
// //   } catch (e) {
// //     console.log(e);
// //   }
// // };

// // module.exports = {
// //   getAllUsers,
// //   login,
// //   register,
// // };













// const User = require("../models/user");
// const bcrypt = require("bcrypt");
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({});
//     const mappedUser = users.map((element) => {
//       return {
//         name: element.name,
//         email: element.email,
//         password: element.password,
//         role: element.role,
//       };
//     });
//     res.send(mappedUser);
//   } catch (e) {
//     console.log(e);
//   }
// };

// // const login = async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email: email });
// //     if (!user) return res.status(400).json({ message: "Email doesn't exist" });

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(400).json({ message: "Invalid password" });

// //     res.status(200).json({ message: "Login successful" });

// //   } catch (error) {
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email: email });
//     if (!user) return res.status(400).json({ message: "Email doesn't exist" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid password" });
//     const token = jwt.sign({ email: user.email, role: user.role }, "0af479bf", {
//       expiresIn: "1h",
//     });
//     res.cookie("token", token);
//     res.status(200).json({ message: "Login successful", user: user });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// const register = async (req, res) => {
//   try {
//     console.log(req);
//     const data = req.body;
//     console.log("Data", data);

//     const hashedPassword = await bcrypt.hash(data.password, 10);

//     const phoneNum = Number(data.phone);

//     const dobDate = new Date(data.dob);

//     const user = new User({
//       name: data.name,
//       email: data.email,
//       password: hashedPassword,
//       dob: dobDate,
//       phone: phoneNum,
//       role: data.role,
//     });

//     await user.save();

//     console.log("user added");

//     res.send({ msg: "user added", id: user._id });
//   } catch (e) {
//     console.log(e);
//   }
// };

// module.exports = {
//   getAllUsers,
//   login,
//   register,
// };














const User = require("../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    const mappedUser = users.map((element) => {
      return {
        name: element.name,
        email: element.email,
        password: element.password,
        role: element.role,
      };
    });
    res.send(mappedUser);
  } catch (e) {
    console.log(e);
  }
};

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email: email });
//     if (!user) return res.status(400).json({ message: "Email doesn't exist" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid password" });

//     res.status(200).json({ message: "Login successful" });

//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ message: "Email doesn't exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });
    const token = jwt.sign({ email: user.email, role: user.role }, "0af479bf", {
      expiresIn: "1h",
    });
    res.cookie("token", token);
    res.status(200).json({ message: "Login successful", user: user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const register = async (req, res) => {
  try {
    console.log(req);
    const data = req.body;
    console.log("Data", data);

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const phoneNum = Number(data.phone);

    const dobDate = new Date(data.dob);

    const user = new User({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      dob: dobDate,
      phone: phoneNum,
      role: data.role,
    });

    await user.save();

    console.log("user added");

    res.send({ msg: "user added", id: user._id });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllUsers,
  login,
  register,
};
