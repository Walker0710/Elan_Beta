import './Form.css';
import VerticalMarquee from '../VerticalMarquee/VerticalMarquee.jsx';
import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({name: '', email: '', competition: ''});
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const competitions = ['Hackathon', 'Code Challenge', 'Design Contest'];

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      setMessage('Registration successful! Redirecting...');
      setFormData({name: '', email: '', competition: ''});

      // Wait briefly to show the success message, then redirect
      setTimeout(() => {
        navigate('/nexus');
      }, 2000); // 2-second delay
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during registration!');
    }
  };

  return (
    <>
      <VerticalMarquee/>
      <div className='registration-form-cont'>

        <h2 className='registration-form-heading'>Register for Nexus</h2>
        <form onSubmit={handleSubmit} className='registration-form'>
          <div>
            <label className='name-label'>Name&nbsp;&nbsp;</label><br/>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='email-label'>Email&nbsp;&nbsp;</label><br/>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='competition-label'>Competition&nbsp;</label><br/>
            <select
              name='competition'
              value={formData.competition}
              onChange={handleChange}
              required
              className='competition-selector'
            >
              <option value='' className='competition-dropdown'>Select Competition</option>
              {competitions.map((comp) => (
                <option key={comp} value={comp}>
                  {comp}
                </option>
              ))}
            </select>
          </div>
          <button type='submit' className='register-button'>Register</button>
        </form>
        {message && <p className='success-message'>{message}</p>}
        {error && <p className='error-message'>{error} Go back to <Link to='/nexus'
                                                                        className='underline-white'>Nexus&#8599;</Link>
        </p>}
      </div>
    </>
  );
};

export default Form;
