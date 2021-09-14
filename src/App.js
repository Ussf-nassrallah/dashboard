import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Expenses from './pages/Expenses/Expenses';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Expenses />
      </Router>
    </>
  );
}

export default App;
