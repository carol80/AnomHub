import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Calculator from './components/calculator/Calculator';
import NavBar from './components/NavBar';
import ApplicationDashboard from './components/Applications/ApplicationDashboard';
import { Routes, Route } from 'react-router';
import ChatSpace from './components/chatApp/ChatSpace';

function App() {
  const [anomActive, setAnomActive] = useState(false);

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', backgroundImage: 'linear-gradient(to top, #000, #333)' }}>
      <NavBar anomActive={anomActive} setAnomActive={setAnomActive} />

      <Routes>
        <Route path="/AnomHub/" element={anomActive ? <ApplicationDashboard /> : <Calculator setAnomActive={setAnomActive} />} />
        <Route path="/AnomHub/chat" element={<ChatSpace />} />
        <Route path="/AnomHub/chat2" element={<ChatSpace />} />
        <Route path="/AnomHub/chat3" element={<ChatSpace />} />
        <Route path="/AnomHub/chat4" element={<ChatSpace />} />
        <Route path="/AnomHub/chat5" element={<ChatSpace />} />
        <Route path="/AnomHub/chat6" element={<ChatSpace />} />
      </Routes>
    </div>
  )
}

export default App;
