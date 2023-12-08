import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Modal from './components/Modal';

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <Navbar  setModal={setModal}/>
      <Dashboard/>
      {modal&&<Modal  setModal={setModal}/>}
    </div>
  );
}

export default App;
