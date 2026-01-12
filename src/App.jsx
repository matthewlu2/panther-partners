import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Pricing from './pages/pricing';
import Contact from './pages/contact';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home/> } />
          <Route path = "/home" element = { <Home/> }/>
          <Route path = "/about" element = { <About/> }/>
          <Route path = "/pricing" element = { <Pricing/> }/>
          <Route path = "/contact" element = { <Contact/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
