const express = require('express');
const router = express.Router();
const { getStacks, createStack } = require('../controllers/stackController');

router.route('/')
  .get(getStacks)
  .post(createStack);

module.exports = router;
