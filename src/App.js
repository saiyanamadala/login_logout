import logo from './logo.svg';
import './App.css';
import Register from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register></Register>}>
          {/* <Route path='/' element={}></Route> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
