import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from './AppContext';
import { Link } from 'react-router-dom';
import './Webdevelopment.css';
import WebDevelopmentImage from '../Assets/orange theme.jpg'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


const EnrolledProjects = () => {
    // const { enrolled, setEnrolled ,userId, setUserId} = useContext(AppContext);
    const userId = localStorage.getItem('userId');
  const [enrolledProjects, setEnrolledProjects] = useState([]);
  console.log(enrolledProjects, "project selected ");

  useEffect(() => {
    const fetchEnrolledProjects = async () => {
        console.log(`http://localhost:3000/user/${userId}/enrolled-projects`);
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/enrolled-projects`);
        setEnrolledProjects(response.data.enrolledProjects);
      } catch (error) {
        console.error('Fetch Enrolled Projects Error:', error);
      }
    };

    fetchEnrolledProjects();
  }, [userId]);

  return (
    <div className='container d-flex justify-content-center'>
      <h2>Enrolled Projects:</h2>
      <ul>
        {enrolledProjects.map((project) => (
          <li key={project._id}>{project.title}</li>
        ))}
      </ul>
    </div>
    
  );
};

export default EnrolledProjects;
