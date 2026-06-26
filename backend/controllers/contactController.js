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

    // Send email using Web3Forms (HTTP API) if key is provided (bypasses Render SMTP port blocking)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          subject: `Portfolio Message: ${subject}`,
          message: message,
          from_name: `${name} (via Portfolio)`
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log('Email sent successfully via Web3Forms');
        } else {
          console.warn('Web3Forms dispatch failed:', data.message);
        }
      })
      .catch(fetchErr => console.warn('Web3Forms fetch error:', fetchErr.message));
    } else {
      // Fallback to Nodemailer SMTP (works on localhost or if Render port is unblocked)
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
            servername: 'smtp.gmail.com'
          }
        });

        if (process.env.EMAIL_PASS) {
          transporter.sendMail(mailOptions)
            .then(() => console.log('Email sent successfully via SMTP'))
            .catch((mailError) => console.warn('SMTP Mail Dispatch Warning:', mailError.message));
        } else {
          console.log('Email simulated (Set EMAIL_PASS or WEB3FORMS_ACCESS_KEY to send actual email):', mailOptions.text);
        }
      });
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
