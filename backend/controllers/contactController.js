const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const dns = require('dns');

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newContact = await Contact.create({ name, email, subject, message });

    const mailOptions = {
      from: email,
      to: 'loriyaparth51@gmail.com',
      subject: `Portfolio Message: ${subject}`,
      text: `You have received a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
    };

    // Resolve smtp.gmail.com to IPv4 address to bypass Render IPv6 issues
    dns.resolve4('smtp.gmail.com', (err, addresses) => {
      let hostAddress = 'smtp.gmail.com';
      if (!err && addresses && addresses.length > 0) {
        hostAddress = addresses[0];
        console.log(`Resolved smtp.gmail.com to IPv4: ${hostAddress}`);
      } else {
        console.warn('DNS IPv4 resolution failed, falling back to hostname:', err ? err.message : 'No addresses found');
      }

      const transporter = nodemailer.createTransport({
        host: hostAddress,
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER || 'loriyaparth51@gmail.com',
          pass: process.env.EMAIL_PASS
        },
        tls: {
          servername: 'smtp.gmail.com' // Crucial for SSL handshake validation on IP addresses
        }
      });

      if (process.env.EMAIL_PASS) {
        // Run in background so the request responds immediately
        transporter.sendMail(mailOptions)
          .then(() => console.log('Email sent successfully'))
          .catch((mailError) => console.warn('Mail Dispatch Warning:', mailError.message));
      } else {
        console.log('Email simulated (Set EMAIL_PASS in .env to enable actual email sending):', mailOptions.text);
      }
    });

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
