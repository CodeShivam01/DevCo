// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './page/HomePage';
import Chat from './page/Chat';
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
