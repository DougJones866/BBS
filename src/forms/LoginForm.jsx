import { useState } from 'react'

export default function LoginForm() {
    const [formData, setFormData] = useState({
      user: '',
      pass: '',
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
  
      console.log(formData);
      setFormData({
        user: '',
        pass: '',
      });
  
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user">Username</label>
            <input
              type="text"
              name="user"
              id="user"
              minLength="3"
              required
              value={formData.user}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              id="pass"
              minLength="3"
              required
              value={formData.pass}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }