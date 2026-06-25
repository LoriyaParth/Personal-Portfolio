const Stack = require('../models/Stack');

const getStacks = async (req, res) => {
  try {
    const stacks = await Stack.find().sort({ category: 1, name: 1 });
    res.status(200).json({ success: true, data: stacks });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const createStack = async (req, res) => {
  try {
    const stack = await Stack.create(req.body);
    res.status(201).json({ success: true, data: stack });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { getStacks, createStack };
