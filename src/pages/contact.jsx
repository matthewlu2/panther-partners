import { useState } from 'react';
import Navbar from '../Navbar';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
  const [result, setResult] = useState("");
  const [preferredContact, setPreferredContact] = useState('Email');
  const accessKey = import.meta.env.VITE_WEB3_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Interseted in getting a tutor? Please fill out the form below and select your preferred contact method to get in touch.</p>
          <p className='reach-out'>Or just reach out manually to <a className='panther-email'href="mailto:pantherpartnerspgh@gmail.com">pantherpartnerspgh@gmail.com</a></p>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="name-container">
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
            <label className="name-label">Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter your full name..."
              className="name-input"
              required={true}
            />
          </div>
          <div className="email-container">
            <label className="email-label">Email</label>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              name="Email"
              placeholder="Enter your email address..."
              className="email-input"
              required={true}
            />
          </div>
          <div className="phone-container">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <label className="phone-label">Phone Number</label>
            <input
              type="tel"
              name="Phone Number"
              placeholder="+1 (555) 000-000"
              className="phone-input"
              required={true}
            />
          </div>
          <div className="message-container">
            <label className="message-label">Message</label>
            <textarea
              name="Message"
              placeholder='Enter your message...'
              className="message-input"
              required={true}
            />
          </div>

          <div className="radio-inputs">
            <label className="radio">
              <input
                type="radio"
                name="Contact Method"
                value="Email"
                checked={preferredContact === 'Email'}
                onChange={(e) => setPreferredContact(e.target.value)}
              />
              <span className="name">Email</span>
            </label>
          
            <label className="radio">
              <input
                type="radio"
                name="contactMethod"
                value="Text"
                checked={preferredContact === 'Text'}
                onChange={(e) => setPreferredContact(e.target.value)}
              />
              <span className="name">Text</span>
            </label>
          
            <label className="radio">
              <input
                type="radio"
                name="contactMethod"
                value="Call"
                checked={preferredContact === 'Call'}
                onChange={(e) => setPreferredContact(e.target.value)}
              />
              <span className="name">Call</span>
            </label>
          </div>

          <button type="submit">Submit</button>

          <p>{result}</p>
        </form>
      </div>
    </>
  );
}

export default Contact;