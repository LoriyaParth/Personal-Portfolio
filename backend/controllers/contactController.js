const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newContact = await Contact.create({ name, email, subject, message });

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'loriyaparth51@gmail.com',
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: 'loriyaparth51@gmail.com',
      subject: `Portfolio Message: ${subject}`,
      text: `You have received a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
    };

    try {
      if (process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } else {
        console.log('Email simulated (Set EMAIL_PASS in .env to enable actual email sending):', mailOptions.text);
      }
    } catch (mailError) {
      console.warn('Mail Dispatch Warning:', mailError.message);
    }

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
