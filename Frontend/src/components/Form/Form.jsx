import './Form.css';
import VerticalMarquee from '../VerticalMarquee/VerticalMarquee.jsx';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    teammate1Name: '',
    teammate1Email: '',
    teammate2Name: '',
    teammate2Email: '',
    teammate3Name: '',
    teammate3Email: '',
    teammate4Name: '',
    teammate4Email: '',
    teammate5Name: '',
    teammate5Email: '',
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidIithEmail = (email) => {
    return email.endsWith('@iith.ac.in');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    // Validate that all email fields end with @iith.ac.in
    const { leaderEmail, teammate1Email, teammate2Email, teammate3Email, teammate4Email, teammate5Email } = formData;
    if (
      !isValidIithEmail(leaderEmail) ||
      !isValidIithEmail(teammate1Email) ||
      !isValidIithEmail(teammate2Email) ||
      !isValidIithEmail(teammate3Email) ||
      !isValidIithEmail(teammate4Email) ||
      !isValidIithEmail(teammate5Email)
    ) {
      setError('All emails must end with @iith.ac.in');
      return;
    }

    try {
      const response = await axios.post('https://api.elan.org.in/api/register', formData, { withCredentials: true });
      // const response = await axios.post('http://localhost:5000/api/register', formData, { withCredentials: true });

      setMessage('Registration successful! Redirecting...');
      setFormData({
        leaderName: '',
        leaderEmail: '',
        leaderPhone: '',
        teammate1Name: '',
        teammate1Email: '',
        teammate2Name: '',
        teammate2Email: '',
        teammate3Name: '',
        teammate3Email: '',
        teammate4Name: '',
        teammate4Email: '',
        teammate5Name: '',
        teammate5Email: '',
      });

      console.log(response.data);

      setTimeout(() => {
        navigate('/nexus');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during registration!');
    }
  };

  return (
    <>
      <VerticalMarquee />
      <div className='registration-form-cont'>
        <h2 className='registration-form-heading'>Register for Nexus</h2>
        <form onSubmit={handleSubmit} className='registration-form'>

          <h3>Leader Information</h3>
          <div>
            <label className='name-label'>Leader Name&nbsp;&nbsp;</label><br />
            <input
              type='text'
              name='leaderName'
              value={formData.leaderName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='email-label'>Leader Email&nbsp;&nbsp;</label><br />
            <input
              type='email'
              name='leaderEmail'
              value={formData.leaderEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='phone-label'>Leader Phone&nbsp;&nbsp;</label><br />
            <input
              type='tel'
              name='leaderPhone'
              value={formData.leaderPhone}
              onChange={handleChange}
              required
            />
          </div>

          <h3>Teammates Information</h3>
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className='teammate-info'>
              <label>Teammate {index} Name&nbsp;&nbsp;</label><br />
              <input
                type='text'
                name={`teammate${index}Name`}
                value={formData[`teammate${index}Name`]}
                onChange={handleChange}
                required
              />
              <label>Email&nbsp;&nbsp;</label><br />
              <input
                type='email'
                name={`teammate${index}Email`}
                value={formData[`teammate${index}Email`]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <button type='submit' className='register-button'>Register</button>
        </form>
        {message && <p className='success-message'>{message}</p>}
        {error && (
          <p className='error-message'>
            {error} Go back to <Link to='/nexus' className='underline-white'>Nexus&#8599;</Link>
          </p>
        )}
      </div>
    </>
  );
};

export default Form;
