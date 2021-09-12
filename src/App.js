import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
      </Router>
    </>
  );
}

export default App;
