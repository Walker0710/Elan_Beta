// import React, { useState } from 'react';
// import './Nexus.css';
// import VerticalMarquee from '/src/components/VerticalMarquee/VerticalMarquee.jsx';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

// const Nexus = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [dob, setDob] = useState('');
//   const [grade, setGrade] = useState('');
//   const [school, setSchool] = useState('');
//   const [personalNumber, setPersonalNumber] = useState('');
//   const [parentNumber, setParentNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const [step, setStep] = useState(1);
//   const [marksheet, setMarksheet] = useState(null);

//   const handleNext = (e) => {
//     e.preventDefault();
//     if (step === 1 && !firstName) {
//       setError('Please fill all the required fields');
//     } else if (step === 2 && !personalNumber) {
//       setError('Please fill all the required fields');
//     } else {
//       setError('');
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handlePrevious = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   const handleMarksheetUpload = (e) => {
//     setMarksheet(e.target.files[0]);
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     // Implement the registration process and Google Drive upload logic here
//     console.log({
//       firstName,
//       lastName,
//       dob,
//       grade,
//       school,
//       personalNumber,
//       parentNumber,
//       email,
//       marksheet,
//     });
//   };

//   const gradeOptions = [
//     '8th Grade',
//     '9th Grade',
//     '10th Grade',
//     '11th Grade',
//     '12th Grade',
//   ];

//   const schoolOptions = [
//     'Springfield Elementary',
//     'Shelbyville High',
//     'Westview Middle School',
//     'Riverview High School',
//     'Lakeside Elementary',
//   ];

//   return (
//     <>
//       <VerticalMarquee />
//       <div className='nexus-container'>
//         <div className={`nexus-personal nexus-step ${step === 1 ? 'nexus-step-active' : ''}`}>
//           <h1>Register for<br /> Nexus</h1>
//           <form className='nexus-personal-form' onSubmit={handleNext}>
//             <div className='nexus-personal-input-div'>
//               <label className='nexus-personal-input-label'>First Name</label>
//               <input
//                 className='nexus-personal-input'
//                 type='text'
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className='nexus-personal-input-div'>
//               <label className='nexus-personal-input-label'>Last Name</label>
//               <input
//                 className='nexus-personal-input'
//                 type='text'
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className='nexus-personal-input-div'>
//               <label className='nexus-personal-input-label'>Date Of Birth</label>
//               <input
//                 className='nexus-personal-input'
//                 type='date'
//                 value={dob}
//                 onChange={(e) => setDob(e.target.value)}
//                 required
//               />
//             </div>
//             <div className='nexus-personal-input-div'>
//               <label className='nexus-personal-input-label'>Grade</label>
//               <select
//                 className='nexus-personal-input'
//                 value={grade}
//                 onChange={(e) => setGrade(e.target.value)}
//                 required
//               >
//                 <option value='' disabled>
//                   Select Grade
//                 </option>
//                 {gradeOptions.map((gradeOption, index) => (
//                   <option key={index} value={gradeOption}>
//                     {gradeOption}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className='nexus-personal-input-div'>
//               <label className='nexus-personal-input-label'>School</label>
//               <select
//                 className='nexus-personal-input'
//                 value={school}
//                 onChange={(e) => setSchool(e.target.value)}
//                 required
//               >
//                 <option value='' disabled>
//                   Select School
//                 </option>
//                 {schoolOptions.map((schoolOption, index) => (
//                   <option key={index} value={schoolOption}>
//                     {schoolOption}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {error && <p className='error-message'>{error}</p>}
//             <button className='nexus-form-button' type='submit'>
//               Next
//             </button>
//           </form>
//         </div>

//         <div className={`nexus-contact nexus-step ${step === 2 ? 'nexus-step-active' : ''}`}>
//           <form className='nexus-contact-form' onSubmit={handleNext}>
//             <div className='nexus-contact-input-div'>
//               <label className='nexus-contact-input-label'>Personal Phone Number</label>
//               <input
//                 className='nexus-contact-input'
//                 type='text'
//                 value={personalNumber}
//                 onChange={(e) => setPersonalNumber(e.target.value)}
//                 required
//               />
//             </div>
//             <div className='nexus-contact-input-div'>
//               <label className='nexus-contact-input-label'>Parents Phone Number</label>
//               <input
//                 className='nexus-contact-input'
//                 type='text'
//                 value={parentNumber}
//                 onChange={(e) => setParentNumber(e.target.value)}
//                 required
//               />
//             </div>
//             <div className='nexus-contact-input-div'>
//               <label className='nexus-contact-input-label'>Email</label>
//               <input
//                 className='nexus-contact-input'
//                 type='text'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             {error && <p className='error-message'>{error}</p>}
//             <div className='nexus-button-group'>
//               <button className='nexus-form-button' type='button' onClick={handlePrevious}>
//                 Previous
//               </button>
//               <button className='nexus-form-button' type='submit'>
//                 Next
//               </button>
//             </div>
//           </form>
//         </div>

//         <div className={`nexus-verify nexus-step ${step === 3 ? 'nexus-step-active' : ''}`}>
//           <form className='nexus-verify-form' onSubmit={handleRegister}>
//             <div className='nexus-verify-input-div'>
//               <label className='nexus-verify-input-label'>Upload Marksheet</label>
//               <input
//                 className='nexus-verify-input'
//                 type='file'
//                 onChange={handleMarksheetUpload}
//                 required
//               />
//             </div>
//             {error && <p className='error-message'>{error}</p>}
//             <div className='nexus-button-group'>
//               <button className='nexus-form-button' type='button' onClick={handlePrevious}>
//                 Previous
//               </button>
//               <button className='nexus-form-button' type='submit'>
//                 Register
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nexus;





import React, { useState } from 'react';
import './Nexus.css';
import VerticalMarquee from '/src/components/VerticalMarquee/VerticalMarquee.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

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

  const steps = ['Personal Details', 'Contact Information', 'Final Verification'];

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

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement the registration process and Google Drive upload logic here
    console.log({
      firstName,
      lastName,
      dob,
      grade,
      school,
      personalNumber,
      parentNumber,
      email,
      marksheet,
    });
  };

  const gradeOptions = [
    '8th Grade',
    '9th Grade',
    '10th Grade',
    '11th Grade',
    '12th Grade',
  ];

  const schoolOptions = [
    'Springfield Elementary',
    'Shelbyville High',
    'Westview Middle School',
    'Riverview High School',
    'Lakeside Elementary',
  ];

  return (
    <>
      <VerticalMarquee />

      <div className='nexus-container'>
        <h1 className='nexus-heading'>Register for<br /> Nexus</h1>

        <div className='nexus-progress-bar'>
          <div className='nexus-progress-line'></div>
          <div
            className='nexus-progress-dot'
            style={{ left: `${(step - 1) * 50}%` }} 
          ></div>
          {steps.map((label, index) => (
            <div
              key={index}
              className={`nexus-progress-step ${index + 1 === step ? 'active' : ''}`}
            >
              {label}
            </div>
          ))}
        </div>


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
            <button className='nexus-form-button' type='submit'>
              Next
            </button>
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
                type='text'
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
              <label className='nexus-personal-input-label'>Upload Marksheet :</label>
              <input
                className='nexus-personal-input'
                type='file'
                onChange={handleMarksheetUpload}
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
    </>
  );
};

export default Nexus;
