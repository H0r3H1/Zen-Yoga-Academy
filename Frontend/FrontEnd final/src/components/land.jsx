import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios'; // Import Axios
import '../assets/land.css';

function Land() {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentAge, setNewStudentAge] = useState('');
  const [newStudentNumber, setNewStudentNumber] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState('');

  const addStudent = () => {
    if (newStudentName.trim() !== '' && newStudentAge.trim() !== '' && newStudentNumber.trim() !== '') {
      const newStudent = {
        name: newStudentName,
        age: newStudentAge,
        number: newStudentNumber
      };
      if (editIndex !== null) {
        const updatedStudents = [...students];
        updatedStudents[editIndex] = newStudent;
        setStudents(updatedStudents);
        setEditIndex(null);
      } else {
        setStudents([...students, newStudent]);
      }
      setNewStudentName('');
      setNewStudentAge('');
      setNewStudentNumber('');
    }
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const editStudent = (index) => {
    const studentToEdit = students[index];
    setNewStudentName(studentToEdit.name);
    setNewStudentAge(studentToEdit.age);
    setNewStudentNumber(studentToEdit.number);
    setEditIndex(index);
  };

  const handleSignup = async () => {
    try {
      const response = await Axios.post('http://localhost:8080/students/addstatus', {
        name: newStudentName,
        age: newStudentAge,
        number: newStudentNumber,
      });
      console.log(response.data);
      console.log('Signup successful');
      // You might need to adjust this part depending on your routing setup
      // For example, if you're using react-router-dom, you can navigate like this:
      // history.push('/Login');
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error signing up');
    }
  }; 

  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar" style={{ backgroundColor: '#333', color: '#fff', padding: '20px', width: '200px', height: '100vh' }}>
       
        <ul>
          <ol><Link to="/land" style={{ color: '#fff', textDecoration: 'none',fontSize:'20px' }}>Students</Link></ol>
          &nbsp;
          <ol><Link to="/payment" style={{ color: '#fff', textDecoration: 'none',fontSize:'20px' }}>Payment</Link></ol>
          &nbsp;
          &nbsp;
          &nbsp;
          <ol><Link to="/" style={{ color: '#fff', textDecoration: 'none',fontSize:'20px' }}>Logout</Link></ol>
        </ul>
       
      </div>

      {/* Main content */}
      <div
        className="yoga-class"
        style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '9000px',
          width:'800px',
          margin: '0 auto',
          height:'600px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          background: `url('https://cdn-icons-png.flaticon.com/256/2689/2689064.png')`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'200px',
          backgroundOrigin:'border-box',
          backgroundPosition: 'right',
          marginLeft: '220px', // Adjusted to accommodate sidebar width
        }}
      >
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Yoga Class</h2>
        <div className="student-list" style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>Students:</h3>
          <ul>
            {students.map((student, index) => (
              <li key={index}>
                <strong>Name:</strong> {student.name}, <strong>Age:</strong> {student.age}, <strong>Number:</strong> {student.number}
                <button style={{ marginLeft: '10px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }} onClick={() => deleteStudent(index)}>Delete</button>
                <button style={{ marginLeft: '10px', backgroundColor: 'green', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }} onClick={() => editStudent(index)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="add-student" style={{ display: 'flex', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Enter student name"
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)}
            style={{ flex: '1', padding: '8px', marginRight: '15px' }}
          />
          <input
            type="number"
            placeholder="Enter student age"
            value={newStudentAge}
            onChange={(e) => setNewStudentAge(e.target.value)}
            style={{ flex: '1', padding: '8px', marginRight: '15px' }}
          />
          <input
            type="tel"
            placeholder="Enter student phone number"
            value={newStudentNumber}
            onChange={(e) => setNewStudentNumber(e.target.value)}
            style={{ flex: '1', padding: '8px' }}
          />
          <button onClick={addStudent} style={{ padding: '8px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>{editIndex !== null ? 'Update Student' : 'Add Student'}</button>
        </div>
        {/* Display error message */}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {/* Signup button */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={handleSignup} style={{ padding: '8px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Land;
