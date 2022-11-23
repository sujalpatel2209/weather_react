// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';
import Registration from './component/Registration';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
