import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AllEmployee from './Pages/AllEmployee';
import NewEntry from './Pages/NewEntry';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/show' element={<AllEmployee />} />
          <Route exact path='/enter' element={<NewEntry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
