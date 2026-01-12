import Navbar from '../Navbar';
import './pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Pricing = () => {
  return (
    <div className="pricing-container">
      <Navbar />
      <div className='pricing-header'>
        <h1>Choose your right plan!</h1>
        <p>Select the plan that best fits your learning needs and budget.</p>
      </div>
      <div className= "pricing-cards">
        <div className="acquaintance-plan">
          <h3 className='card-head'>Acquaintance</h3>
          <h2 className='card-price'>$50</h2>
          <p className='card-desc'>1 one hour session, billed in total</p>
          <p><FontAwesomeIcon icon={faCheck} /> Reinforce Concepts</p>
          <p><FontAwesomeIcon icon={faCheck} /> Homework Help</p>
          <p><FontAwesomeIcon icon={faCheck} /> Perfect for Exam Prep</p>
          <a href='/contact' className='card-button'>Get Started</a>
        </div>
        <div className="alliance-plan">
          <h3 className='card-head'>Alliance</h3>
          <h2 className ='card-price'>$44</h2>
          <p className='card-desc'>4 one hour sessions, billed in total</p>
          <p><FontAwesomeIcon icon={faCheck} /> Tackle Difficult Portions Of A Course</p>
          <p><FontAwesomeIcon icon={faCheck} /> Rebound After Undesired Exam Results</p>
          <p><FontAwesomeIcon icon={faCheck} /> Complete Subject Review</p>
          <a href='/contact' className='card-button'>Get Started</a>
        </div>
        <div className="partner-plan">
          <h3 className='card-head-partner'>Partner</h3>
          <h2 className='card-price'>$36</h2>
          <p className='card-desc'>8 one hour sessions, billed in total</p>
          <p><FontAwesomeIcon icon={faCheck} /> Develop A Personal Relationship With Your Tutor</p>
          <p><FontAwesomeIcon icon={faCheck} /> Dive In Depth Into Multiple Topics and Subjects</p>
          <p><FontAwesomeIcon icon={faCheck} /> Semester Long Partnership and Mentorship</p>
          <a href='/contact' className='card-button'>Get Started</a>
        </div>
      </div>
    </div>
  )
};

export default Pricing;
