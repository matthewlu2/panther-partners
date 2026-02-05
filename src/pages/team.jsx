import Navbar from '../Navbar';
import './team.css';

import matthew from '../assets/matthew_p_p.jpeg';
import kai from '../assets/kai_p_p.jpg';
import delaney from '../assets/delaney_p_p.jpg';
import tommy from '../assets/tommy_p_p.jpg';
import zoe from '../assets/zoe_p_p.jpg';

const Team = () => {
  return (
    <div className="team-container">
      <Navbar />

      <div className="team-header">
        <h1>Meet Our Team of Dedicated Student Tutors</h1>
      </div>

      <div className="team-grid">
        <div className="team-member">
          <img src={matthew} alt="Matthew Lu" className="team-photo matthew-photo" />
          <p className="team-name">Matthew Lu</p>
          <p className="team-subjects">Computer Science • Statistics • Economics</p>
        </div>

        <div className="team-member">
          <img src={kai} alt="Kai Dehus" className="team-photo kai-photo" />
          <p className="team-name">Kai Dehus</p>
          <p className="team-subjects">Engineering • Calculus</p>
        </div>

        <div className="team-member">
          <img src={delaney} alt="Delaney Asbury" className="team-photo delaney-photo" />
          <p className="team-name">Delaney Asbury</p>
          <p className="team-subjects">Biology • Chemistry • Neuroscience</p>
        </div>

        <div className="team-member">
          <img src={tommy} alt="Thomas Selwood" className="team-photo tommy-photo" />
          <p className="team-name">Thomas Selwood</p>
          <p className="team-subjects">Biology • Chemistry</p>
        </div>

        <div className="team-member">
          <img src={zoe} alt="Zoe Fitzsimmons" className="team-photo zoe-photo" />
          <p className="team-name">Zoe Fitzsimmons</p>
          <p className="team-subjects">Chemistry • Biology</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
