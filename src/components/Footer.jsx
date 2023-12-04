
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={leftSectionStyle}>
          <h4>Contact Us</h4>
          <p>Name: Md Tarikul Islam</p>
          <p>Email: tarikulat124@gmail.com</p>
          <p>Phone: 01793-800828</p>
          <p>URL: tarikul.info</p>
        </div>
        <div>
          <h4>Project Details</h4>
          <p>Ecommerce</p>
          <p>Shopping</p>
          <p>Offrers</p>
          <p>Freatures</p>
        </div>
        <div style={rightSectionStyle}>
          <h4>Follow Us</h4>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Github</p>
        </div>
      </div>
      <div style={copyrightStyle}>
        <p>&copy; 2023 @Md Tarikul Islam. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: '#333',
  color: '#fff',
  padding: '2rem 0',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
};

const leftSectionStyle = {
  flex: 1,
};

const rightSectionStyle = {
  flex: 1,
  textAlign: 'right',
};

const copyrightStyle = {
  marginTop: '1rem',
  textAlign: 'center',
};

export default Footer;
