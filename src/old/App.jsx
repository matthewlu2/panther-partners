import Navbar from '../Navbar'
import './App.css'
import Iridescence from './Background'

function hexToRgbArray(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;
  return [r, g, b];
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden'}}>
      <Iridescence
        color={hexToRgbArray('#636cff')}
        speed={0.8}              // animation speed
        amplitude={0.2}          // how much it reacts to mouse
        mouseReact={false}        // enable mouse interactivity
      />

      {/* Overlayed UI */}
      <div className="pricing-container">
        <Navbar />
        <div className= "pricing-cards">
          <div className="acquaintance-plan">
            <h2>Acquaintance Plan</h2>
            <p>$49.99/Session</p>
          </div>
          <div className="alliance-plan">
            <h2>Alliance Plan</h2>
            <p>$43.99/Session</p>
          </div>
          <div className="partner-plan">
            <h2>Partner Plan</h2>
            <p>$35.99/Session</p>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
