
import React, { useContext } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from './AppContext';
import { Link } from 'react-router-dom';
 import './Webdevelopment.css';
 import WebDevelopmentImage from '../Assets/orange theme.jpg'
 import Accordion from 'react-bootstrap/Accordion';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import ListGroup from 'react-bootstrap/ListGroup';

const ProjectDetailPage = ({ match, projects }) => {
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
    // const { enrolled, setEnrolled,userId, setUserId } = useContext(AppContext);
    const { projectId } = useParams();
    console.log(projectId , "project id");
    console.log(userId,"user id from db");

  const project = projects.find((p) => p.link === projectId);
  console.log(project._id , "deail");

  const handleSelect = async (selectedProject) => {
    try {
      
      const response = await axios.post('http://localhost:3000/enroll', {
        userId: userId,
        projectId: selectedProject._id,
      });
      if(response.data.success){
        navigate("/enrolled-projects");
      }
      console.log(response.data , "response from db");

    } catch (error) {
      console.error('Error selecting project:', error);
    }
  };

  if (!project) {
    return <div>Project not found</div>;
  }



  return (
    // <div className='container d-flex justify-content-center mt-5'>
    // <div key={project._id} className="card">
    //         <img src={project.imgSrc} alt={project.title} />
            // <h3>{project.title}</h3>
    //         <p>{project.description}</p>
    //        <Button onClick={() => handleSelect(project)}>Select</Button>
           
    //       </div>
    // </div>

    <div className="webdev">


    <Link to="/Studentdash" className="back-button">Back</Link> {/*Add this line for the back button */}
     {/* Image with text overlay */}
     <div className="image-container">
       <img src={WebDevelopmentImage} alt="Web Development Project" className="project-image-a" />
       <div className="image-overlay">
       <div className="image-text">
       <h3>{project.title}</h3>
       <br></br>
       <p>{project.description}</p>
       <Button onClick={() => handleSelect(project)}>Register</Button>
     </div>
   </div>
   </div>
      <br></br>

   <div className="content-box">
       <section id='title' className='py-md-5'>
         {/* <div className="title-box"> */}
           <h2 className='my-5 text-center'>What you'll learn</h2>
         {/* </div> */}
         <div className='learning-box'>
           <ul className='learning-list'>
             <li> * Build web development projects for your portfolio, ready to apply for junior developer jobs.</li>
             <li> * Learn the latest technologies, including Javascript, React, Node, and even Web3 development.</li>
             <li> * After the course, you will be able to build ANY website you want.</li>
             <li> * Build fully-fledged websites and web apps for your startup or business.</li>
             <li> * Work as a freelance web developer.</li>
             <li> * Master frontend development with React.</li>
             <li> * Master backend development with Node.</li>
             <li> * Learn professional developer best practices.</li>
           </ul>
         </div>
       </section>
       </div>
          <br></br>

       <div className="content-box-a">
       <section id='title' className='py-md-5'>
         <div>
           <h2>This Course Includes</h2>
         </div>
   <ListGroup>
   <ListGroup.Item>On-demand video</ListGroup.Item>
   <ListGroup.Item>Coding exercises</ListGroup.Item>
   <ListGroup.Item>Articles</ListGroup.Item>
   <ListGroup.Item>Downloadable resources</ListGroup.Item>
   <ListGroup.Item>Access on mobile and TV</ListGroup.Item>
   <ListGroup.Item>Certificate of completion</ListGroup.Item>
   </ListGroup>
       </section>
       </div>
         <br></br>  

       <div className='content-docs'>
         <section id='title' className='py-md-5'>
       <div>
         <h2>Course Content</h2>
         </div>
    <Accordion defaultActiveKey={0} className="mt-5 p-3">
        <Accordion.Item eventKey="0" className="item" >
           <Accordion.Header>Introduction to Web Development</Accordion.Header>
              <Accordion.Body>
              Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of ICTAK! 

              At 62+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.
              </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1" className="item" >
           <Accordion.Header>Project Overview Document</Accordion.Header>
              <Accordion.Body>
                          Project Overview Document
              </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="2" className="item" >
           <Accordion.Header>Reference Materials</Accordion.Header>
              <Accordion.Body>
                          Reference Materials
              </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="3" className="item" >
           <Accordion.Header>Weekly Submission and Submission Link</Accordion.Header>
              <Accordion.Body>
                          Weekly Submission and Submission Link
              </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="4" className="item" >
           <Accordion.Header>Final Project Report Submission</Accordion.Header>
              <Accordion.Body>
                          Final Project Report Submission
              </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="5" className="item" >
           <Accordion.Header>Viva Voce Format</Accordion.Header>
              <Accordion.Body>
                          Viva Voce Format
              </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="6" className="item" >
           <Accordion.Header>Discussion Forum</Accordion.Header>
              <Accordion.Body>
                           Discussion Forum
              </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="7" className="item" >
           <Accordion.Header>Score System</Accordion.Header>
              <Accordion.Body>
                         Score System
              </Accordion.Body>
         </Accordion.Item>
     </Accordion>
     </section>
     </div>
</div>
    
  );
};

export default ProjectDetailPage;