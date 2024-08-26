import React, {useState} from 'react';
import './Nexus.css';
import VerticalMarquee from '/src/components/VerticalMarquee/VerticalMarquee.jsx';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Nexus = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [grade, setGrade] = useState('');
  const [school, setSchool] = useState('');
  const [personalNumber, setPersonalNumber] = useState('');
  const [parentNumber, setParentNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const [marksheet, setMarksheet] = useState(null);
  const [marksheetURL, setMarksheetURL] = useState('');
  const navigate = useNavigate();

  const steps = ['Personal Details', 'Contact Information', 'Final Verification'];

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting registration form:', {
        firstName,
        lastName,
        dob,
        grade,
        school,
        personalNumber,
        parentNumber,
        email,
        marksheetURL
      });

      const response = await axios.post('http://localhost:5000/user/register', {
        firstName,
        lastName,
        dob,
        grade,
        school,
        personalNumber,
        parentNumber,
        email,
        marksheetURL
      });

      console.log('Registration successful:', response.data);
      navigate('/');
    } catch (err) {
      console.error('Error during registration:', err.response ? err.response.data : err.message);
      setError('Registration failed');
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && !firstName) {
      setError('Please fill all the required fields');
    } else if (step === 2 && !personalNumber) {
      setError('Please fill all the required fields');
    } else {
      setError('');
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleMarksheetUpload = (e) => {
    setMarksheet(e.target.files[0]);
  };

  const gradeOptions = [
    '8th Grade',
    '9th Grade',
    '10th Grade',
    '11th Grade',
    '12th Grade'
  ];

  const schoolOptions = [
    'Springfield Elementary',
    'Shelbyville High',
    'Westview Middle School',
    'Riverview High School',
    'Lakeside Elementary'
  ];

  return (
    <>
      <VerticalMarquee/>

      <div className='nexus-container'>
        <div className='nexus-progress-bar mobile-hide'>
          <div className='nexus-progress-line'></div>
          <div
            className='nexus-progress-dot'
            style={{left: `${(step - 1) * 50}%`}}
          ></div>
          <div className='nexus-progress-step-all'>
            {steps.map((label, index) => (
              <div
                key={index}
                className={`nexus-progress-step ${index + 1 === step ? 'active' : ''}`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className='nexus-heading-form'>
          <div className='nexus-heading-stuff'>
            <h1 className='nexus-heading'>
              Register for <br className='mobile-hide'/>
              <span style={{color: '#ff4c4c'}}>Nexus</span>
            </h1>
            <p className='nexus-content-para'>We are pleased to announce the launch of NEXUS, an examination for
                                              upcoming scholars,
                                              as part of IIT Hyderabad’s annual techno-cultural fest Elan & nVision.
                                              This initiative aims
                                              to provide a unique opportunity for school students to compete amongst the
                                              best, visit the campus of Indian
                                              Institute of Technology Hyderabad, and interact with IITians to seek
                                              guidance for their future endeavours.
            </p>
            <p className='nexus-content-link-1'>For more read this  &nbsp;
              <a
                href='https://docs.google.com/document/d/1kw2lxHn3HFV-R0BheWt5CH_qD0F4bUf9CnTGiaEPusk/edit'
                target='_blank'
                rel='noopener noreferrer'
                style={{textDecoration: 'underline'}}
              >
                doc&#8599;
              </a>.
            </p>
          </div>

          <div className='nexus-full-form'>

            <div className={`nexus-personal nexus-step ${step === 1 ? 'nexus-step-active' : ''}`}>
              <form className='nexus-personal-form' onSubmit={handleNext}>
                <div className='nexus-personal-input-div'>
                  <label className='nexus-personal-input-label'>First Name :</label>
                  <input
                    className='nexus-personal-input'
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className='nexus-personal-input-div'>
                  <label className='nexus-personal-input-label'>Last Name :</label>
                  <input
                    className='nexus-personal-input'
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className='nexus-personal-input-div'>
                  <label className='nexus-personal-input-label'>Date Of Birth :</label>
                  <input
                    className='nexus-personal-input'
                    type='date'
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>
                <div className='nexus-personal-input-div'>
                  <label className='nexus-personal-input-label'>Grade :</label>
                  <select
                    className='nexus-personal-input'
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                  >
                    <option value='' disabled>
                      Select Grade
                    </option>
                    {gradeOptions.map((gradeOption, index) => (
                      <option key={index} value={gradeOption}>
                        {gradeOption}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='nexus-personal-input-div'>
                  <label className='nexus-personal-input-label'>School :</label>
                  <select
                    className='nexus-personal-input'
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    required
                  >
                    <option value='' disabled>
                      Select School
                    </option>
                    {schoolOptions.map((schoolOption, index) => (
                      <option key={index} value={schoolOption}>
                        {schoolOption}
                      </option>
                    ))}
                  </select>
                </div>
                {error && <p className='error-message'>{error}</p>}
                <div className='nexus-button-group'>
                  <button className='nexus-form-button' type='submit'>
                    Next
                  </button>
                </div>
              </form>
            </div>


            <div className={`nexus-personal nexus-step ${step === 2 ? 'nexus-step-active' : ''}`}>
              <form className='nexus-personal-form' onSubmit={handleNext}>
                <div className='nexus-personal-input-div'>
                  <label className='nexus-personal-input-label'>Personal Phone Number :</label>
                  <input
                    className='nexus-personal-input'
                    type='text'
                    value={personalNumber}
                    onChange={(e) => setPersonalNumber(e.target.value)}
                    required
                  />
                </div>
                <div className='nexus-personal-input-div'>
                  <label className='nexus-personal-input-label'>Parents Phone Number :</label>
                  <input
                    className='nexus-personal-input'
                    type='text'
                    value={parentNumber}
                    onChange={(e) => setParentNumber(e.target.value)}
                    required
                  />
                </div>
                <div className='nexus-personal-input-div'>
                  <label className='nexus-personal-input-label'>Email :</label>
                  <input
                    className='nexus-personal-input'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {error && <p className='error-message'>{error}</p>}
                <div className='nexus-button-group'>
                  <button className='nexus-form-button' type='button' onClick={handlePrevious}>
                    Previous
                  </button>
                  <button className='nexus-form-button' type='submit'>
                    Next
                  </button>
                </div>
              </form>
            </div>

            <div className={`nexus-personal nexus-step ${step === 3 ? 'nexus-step-active' : ''}`}>
              <form className='nexus-personal-form' onSubmit={handleRegister}>
                <div className='nexus-personal-input-div'>
                  <label className='nexus-personal-input-label'>Upload Marksheet Link :</label>
                  <input
                    className='nexus-personal-input'
                    type='text'
                    value={marksheetURL}
                    onChange={(e) => setMarksheetURL(e.target.value)}
                    required
                  />
                </div>
                {error && <p className='error-message'>{error}</p>}
                <div className='nexus-button-group'>
                  <button className='nexus-form-button' type='button' onClick={handlePrevious}>
                    Previous
                  </button>
                  <button className='nexus-form-button' type='submit'>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nexus;
