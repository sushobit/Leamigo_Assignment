import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'; 

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>

          <Link type="submit" link to='/thankyou' className='button'>Submit</Link>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
