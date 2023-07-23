import React from 'react';
import './index.css'; 
import { Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className='buttonfolder'>
          <Button  className='button' variant="primary" type="submit">
            Login
          </Button>
          <Button  className='button' variant="secondary" link='https://www.facebook.com/' type="submit">
            Sign Up
          </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
