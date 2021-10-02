const express = require("express");
const router = express.Router();


const UsersModel = require("../models").Users
// const db = require("../models")

// GET USERS PROFILE
router.get("/profile/:id", async (req, res) => {
  let users = await users.findByPk(req.params.id);
  res.json({ users });
});
// GET ALL USERS
router.get('/', async (req, res) => {
  let users = await users.findAll();
  res.json({ users });
});

// CREATE A NEW USER
router.post('/', async (req, res) => {
  let users = await users.create(req.body);
  res.json({ users });
});

// UPDATE A USER
router.put('/:id', async (req, res) => {
  let users = await users.update(req.body, {
    where: { id: req.params.id },
    returning: true
  });
  res.json({ users });
});

// DELETE A USER
router.delete('/:id', async (req, res) => {
  await users.destroy({
    where: { id: req.params.id }
  });
  res.json({
    message: `User with id ${req.params.id} was deleted`
  });
});

module.exports = router;
