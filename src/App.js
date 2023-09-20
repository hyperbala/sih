import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import VoiceState from './contexts/voiceState';

function App() {
  return (
    <>
    <VoiceState>
      <Router>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </VoiceState>
    </>
  );
}

export default App;
