import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Test from './Pages/Quiz/Test';
import Quiz from './Pages/Quiz/Quiz';



function App() {
  return (
    <div >
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/test' element={<Test/>}/>
  </Routes>
    </div>
  );
}

export default App;
