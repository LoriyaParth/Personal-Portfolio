import React, { useState } from 'react';
import { submitContact } from '../api';
import Card3D from '../components/Card3D';

const LetsTalk = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address (e.g., user@domain.com).' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await submitContact(formData);

      // Also send email notification directly from frontend to bypass Render's server block & Cloudflare protection
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '8f1e35c2-4fa9-4205-953c-147dcc5b3a8b';
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Message: ${formData.subject}`,
          message: formData.message,
          from_name: `${formData.name} (via Portfolio)`
        })
      }).catch(err => console.warn('Web3Forms dispatch warning:', err));

      setStatus({ type: 'success', message: 'Message sent successfully! Talk to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-widest text-accent uppercase">Interactive Form</span>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-white mt-3 mb-6">
          Let's talk about your project
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Fill out this form to drop a message straight into my inbox. All inquiries are saved securely to my database.
        </p>
      </div>

      <Card3D className="p-8 md:p-12 border border-accent/20 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 rounded-xl glass-input text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className="w-full px-4 py-3 rounded-xl glass-input text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Collaboration Request"
              className="w-full px-4 py-3 rounded-xl glass-input text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a bit about what you have in mind..."
              className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"
            />
          </div>

          {status.message && (
            <div className={`p-4 rounded-xl text-sm font-semibold border ${
              status.type === 'success' 
                ? 'bg-accent/10 text-accent border-accent/20' 
                : 'bg-rose-950/60 text-rose-400 border-rose-800'
            }`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full bg-accent text-darkbg font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 transition-all text-center disabled:opacity-50"
          >
            {loading ? 'Sending message...' : 'Send Message'}
          </button>
        </form>
      </Card3D>
    </div>
  );
};

export default LetsTalk;
