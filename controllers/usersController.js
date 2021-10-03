const express = require("express");
const router = express.Router();


const UserModel = require("../models").users
const db = require("../models")

// GET ALL USERS
router.get("/", async (req, res) => {
  let users = await UserModel.findAll();
  res.json({ users });
});

// GET USER PROFILE
router.get("/profile/:id", async (req, res) => {
  let users = await UserModel.findByPk(req.params.id, {
  });
  res.json({ users });
});




// CREATE A NEW USER
router.post('/', async (req, res) => {
  let users = await UserModel.create(req.body);
  res.json({ users });
});

// UPDATE A USER
router.put('/:id', async (req, res) => {
  let users = await UserModel.update(req.body, {
    where: { id: req.params.id },
    returning: true
  });
  res.json({ users });
});

// DELETE A USER
router.delete('/:id', async (req, res) => {
  await UserModel.destroy({
    where: { id: req.params.id }
  });
  res.json({
    message: `User with id ${req.params.id} was deleted`
  });
});

module.exports = router;