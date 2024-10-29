import './Form.css';
import VerticalMarquee from '../VerticalMarquee/VerticalMarquee.jsx';
import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    teammates: Array(6).fill({name: '', email: ''}),
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleTeammateChange = (index, field, value) => {
    const newTeammates = formData.teammates.map((teammate, idx) =>
      idx === index ? {...teammate, [field]: value} : teammate
    );
    setFormData({...formData, teammates: newTeammates});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {

      const response = axios.post('https://api.elan.org.in/api/register', formData, { withCredentials: true });
      // const response = axios.post('http://localhost:5000/api/register', formData, { withCredentials: true });
      setMessage('Registration successful! Redirecting...');
      setFormData({
        leaderName: '',
        leaderEmail: '',
        leaderPhone: '',
        teammates: Array(6).fill({name: '', email: ''}),
      });

      console.log(response.response.data);

      setTimeout(() => {
        navigate('/nexus');
      }, 2000);
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
          
          <h3>Leader Information</h3>
          <div>
            <label className='name-label'>Leader Name&nbsp;&nbsp;</label><br/>
            <input
              type='text'
              name='leaderName'
              value={formData.leaderName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='email-label'>Leader Email&nbsp;&nbsp;</label><br/>
            <input
              type='email'
              name='leaderEmail'
              value={formData.leaderEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='phone-label'>Leader Phone&nbsp;&nbsp;</label><br/>
            <input
              type='tel'
              name='leaderPhone'
              value={formData.leaderPhone}
              onChange={handleChange}
              required
            />
          </div>

          <h3>Teammates Information</h3>
          {formData.teammates.map((teammate, index) => (
            <div key={index} className='teammate-info'>
              <label>Teammate {index + 1} Name&nbsp;&nbsp;</label><br/>
              <input
                type='text'
                value={teammate.name}
                onChange={(e) => handleTeammateChange(index, 'name', e.target.value)}
                required={index < 4} // Required for the first 4 teammates, optional for 5 and 6
              />
              <label>Email&nbsp;&nbsp;</label><br/>
              <input
                type='email'
                value={teammate.email}
                onChange={(e) => handleTeammateChange(index, 'email', e.target.value)}
                required={index < 4}
              />
            </div>
          ))}

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
