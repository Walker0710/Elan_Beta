// import './Form.css';
// import VerticalMarquee from '../VerticalMarquee/VerticalMarquee.jsx';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Form = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', competition: '' });
//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const competitions = ['Hackathon', 'Code Challenge', 'Design Contest'];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setMessage(null);

//     try {
//       const response = await axios.post('http://localhost:5000/api/register', formData);
//       setMessage(response.data.message);
//       setFormData({ name: '', email: '', competition: '' });

//       navigate('/nexus');
//     } catch (err) {
//       setError(err.response?.data?.message || 'An error occurred during registration.');
//     }
//   };

//   return (
//     <div className="registration-form">
//       <h2>Event Registration</h2>
//       {message && <p className="success-message">{message}</p>}
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Competition:</label>
//           <select
//             name="competition"
//             value={formData.competition}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Competition</option>
//             {competitions.map((comp) => (
//               <option key={comp} value={comp}>
//                 {comp}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Form;




import './Form.css';
import VerticalMarquee from '../VerticalMarquee/VerticalMarquee.jsx';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', competition: '' });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const competitions = ['Hackathon', 'Code Challenge', 'Design Contest'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      setMessage('Registration successful! Redirecting...');
      setFormData({ name: '', email: '', competition: '' });

      // Wait briefly to show the success message, then redirect
      setTimeout(() => {
        navigate('/nexus');
      }, 2000); // 2-second delay
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during registration.');
    }
  };

  return (
    <div className="registration-form">
      <VerticalMarquee />
      <h2>Event Registration</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Competition:</label>
          <select
            name="competition"
            value={formData.competition}
            onChange={handleChange}
            required
          >
            <option value="">Select Competition</option>
            {competitions.map((comp) => (
              <option key={comp} value={comp}>
                {comp}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
