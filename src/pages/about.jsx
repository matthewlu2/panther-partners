import Navbar from "../Navbar.jsx"
import './about.css';
import studying from '../assets/studying.jpg';

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-left">
        <h1>Our dream is building a smarter way to learn—by students, for students</h1>
        <p>We’re a student-founded tutoring organization built to support the academic success of University of Pittsburgh students. Having navigated the same classes, professors, and challenges ourselves, we understand what it takes to succeed at Pitt.
Our tutors are high-achieving Pitt students who combine strong subject knowledge with a practical, approachable teaching style. We focus on clarity, confidence, and strategies that actually work—whether that means mastering difficult concepts, preparing for exams, or staying on track throughout the semester.
We believe learning works best when it’s collaborative, supportive, and tailored to each student’s goals. Our mission is to make high-quality, peer-led tutoring accessible and effective, helping students not just get through their courses, but truly understand them.</p>
      </div>
      <div className="about-right">
        <img src={studying} alt="Studying" className="about-image" />
        <div className="about-stats"> 
          <div className="about-grid">  
            <div className="about-grid-item">X+ Students Tutored</div> 
            <div className="about-grid-item">X+ Sessions Completed</div> 
            <div className="about-grid-item">X+ Courses Covered</div> 
            <div className="about-grid-item">X+ Average Tutor GPA</div> 
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
