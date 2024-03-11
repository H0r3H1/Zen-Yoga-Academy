// CoursePage.js
import React, { useState } from 'react';
import '../assets/class.css'; // Import CSS file for styling

function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [studentName, setStudentName] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  const predefinedCourses = ['Yoga', 'Pilates', 'Meditation', 'Tai Chi'];
  const predefinedAges = ['Kids', 'Teenagers', 'Adults'];

  const addCourse = () => {
    if (studentName.trim() !== '' && selectedAge.trim() !== '' && selectedCourse.trim() !== '') {
      const newCourse = {
        name: studentName,
        age: selectedAge,
        course: selectedCourse
      };
      setCourses([...courses, newCourse]);
      setStudentName('');
      setSelectedAge('');
      setSelectedCourse('');
    }
  };

  const deleteCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const editCourse = (index, newName, newAge, newCourse) => {
    const updatedCourses = [...courses];
    updatedCourses[index] = { name: newName, age: newAge, course: newCourse };
    setCourses(updatedCourses);
  };

  return (
    <div
    className="yoga-class"
    style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '9000px',
      width:'1000px',
      margin: '0 auto',
      height:'600px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      background: `url('https://t3.ftcdn.net/jpg/06/12/40/82/360_F_612408279_CBRLQkgRxzejNBVIy7rqquOJLbEGnuWB.jpg')`,
      backgroundRepeat:'no-repeat', // Ensure background image doesn't repeat
      backgroundSize:'cover', // Cover the background with the image
      backgroundOrigin:'border-box',
      backgroundPosition: 'right',
    }}
  >
    
    <div className="course-page-container">
      <h2>Courses</h2>
      <div className="course-list">
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              {course.name} - Age: {course.age}, Course: {course.course}
              <button onClick={() => deleteCourse(index)}>Delete</button>
              <button onClick={() => editCourse(index, prompt("Enter new name:"), prompt("Enter new age:"), prompt("Enter new course:"))}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-course">
        <input
          type="text"
          placeholder="Enter student name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <select
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
        >
          <option value="">Select age category...</option>
          {predefinedAges.map((age, index) => (
            <option key={index} value={age}>{age}</option>
          ))}
        </select>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">Select a course...</option>
          {predefinedCourses.map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>
        <button onClick={addCourse}>Add Course</button>
      </div>
    </div>
    </div>
  );
}

export default CoursePage;
