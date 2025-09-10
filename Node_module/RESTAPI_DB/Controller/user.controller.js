const User = require("../Models/user.model");
const { v4: uuidv4 } = require("uuid");

// TODO: ############ Get User
// TODO: ############ Get User

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// TODO: ############### One User
// TODO: ############### One User

const getOneUser = async (req, res) => {
  try {
    const oneUser = await User.findOne({id: req.params.id});
       res.status(200).json(oneUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// TODO: ############ Create user
// TODO: ############ Create user

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: req.body.age,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// TODO: ########### Update user
// TODO: ########### Update user

const updateUser = async (req, res) => {
  try {
    const updateUser = await User.findOne({ id: req.params.id });
    updateUser.name = req.body.name
    updateUser.age = Number(req.body.age)
    updateUser.save()
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// TODO: ############## DELETE USER
// TODO: ############## DELETE USER

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({id: req.params.id});
    res.status(200).json({
      message: "User is deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getUser, getOneUser, createUser, updateUser, deleteUser };
