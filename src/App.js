import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Login from './Page/Login';
import SignUp from './Page/SignUp';
import Students from './Page/Students';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Students></Students>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='students' element={<Students></Students>}></Route>
      </Routes>

    </div>
  );
}

export default App;
