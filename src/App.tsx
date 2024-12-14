import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Calculator from './components/calculator/Calculator';
import ChatSpace from './components/chatApp/ChatSpace';
import NavBar from './components/NavBar';

function App() {
  let [anomActive, setAnomActive] = useState(false);

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', backgroundImage: 'linear-gradient(to top, #000, #333)' }}>
      <NavBar anomActive={anomActive} />
      {anomActive ? (
        <ChatSpace />
      ) : (
        <Calculator setAnomActive={setAnomActive} />
      )}
    </div>
  )
}

export default App;
