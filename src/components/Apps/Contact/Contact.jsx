import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Connect</h1>

      {submitted ? (
        <div className="success-message card">
          <p>Thank you for your message! I'll get back to you soon.</p>
          <button className="reset-btn" onClick={() => setSubmitted(false)}>Send another message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form card">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g. Jane Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="e.g. jane.doe@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
            />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      )}

      <div className="contact-info card">
        <h3>Other Ways to Reach Me</h3>
        <ul>
          <li><strong>Email:</strong> randhir2709vns@gmail.com.com</li>
          <li><strong>GitHub:</strong> <a href="https://github.com/iamhero2709" target="_blank">github.com/johndoe</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/randhir-kumar-861573301/" target="_blank">linkedin.com/in/johndoe</a></li>
          <li><strong>Twitter:</strong> <a href="https://x.com/randhir302" target="_blank">@johndoe</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
