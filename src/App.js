import logo from './logo.svg';
import './App.css';
import Register from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/welcome' element={<Welcome></Welcome>}></Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
