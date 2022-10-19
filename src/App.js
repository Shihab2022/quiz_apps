import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
    </div>
  );
}

export default App;
