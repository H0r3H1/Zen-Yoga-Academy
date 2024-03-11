import React, { useState } from 'react';
import '../assets/application.css';
import axios from 'axios';

function Appl() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    address: '',
    city: '',
    pincode: '',
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      upload: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/appl/addapplication", formData);
      console.log(response.data);
      console.log("Application submitted successfully");
    } catch (error) {
      console.error("Error submitting application:", error);
      setError("Error submitting application");
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Job Application Form</title>
      <link rel="stylesheet" href="StyleForJobApplication.css" />
      <div className="app container">
        <div className="app apply_box">
          <h1>
            Zen Admission Form
            <span className="app title_small"></span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="app form_container">
              <div className="app form_control">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="eg: harshitha"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="app form_control">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="eg: c s"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="app form_control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="eg: harshithabhuvana2003@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="app form_control">
                <label htmlFor="age">Age</label>
                <input 
                  type="text"
                  name="age"
                  id="age"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div className="app address_area">
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  id="address"
                  placeholder="Enter Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="app form_control">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city name"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="app form_control">
                <label htmlFor="pincode">Pin code</label>
                <input
                  type="number"
                  name="pincode"
                  id="pincode"
                  placeholder="eg: 226020"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>
             
            </div>
            <div className="app button_container">
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Appl;
