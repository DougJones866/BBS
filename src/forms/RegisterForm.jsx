import { useState } from 'react';
import '../styles/Register.css'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate and handle registration here.
    // You can add validation logic to ensure that passwords match, email is valid, etc.
    // Example:
    // if (formData.password !== formData.confirmPassword) {
    //   // Passwords do not match, display an error message.
    //   return;
    // }

    // Perform registration action, e.g., send registration data to a server.

    // Reset the form fields
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='registration'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            minLength="3"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            minLength="6" // Adjust the minimum password length as needed
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            minLength="6" // Adjust the minimum password length as needed
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="submit" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}