const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newContact = await Contact.create({ name, email, subject, message });

    res.status(201).json({ success: true, data: newContact });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { createContact, getContacts };
