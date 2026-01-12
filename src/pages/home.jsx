import Navbar from '../Navbar.jsx';
import './home.css';

const Home = () => {
  return (
    <div className='background-image'>
      <Navbar />
      <div className='hero'>
        <div className="home-container">
          <h1>Expert Tutoring </h1>
          <h1>By Students, For Students</h1>
        </div>
        <div className="home-buttons">
          <a href="/about" className='about-us'>About Us</a>
          <a href="/contact" className='contact-us'>Contact Us</a>
        </div>
      </div>
    </div>
 )
};

export default Home;
