import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './Component/AddStudent';
import Navbar from './Component/Navbar';
import ViewStudent from './Component/ViewStudent';
import Home from './Page/Home';
import Login from './Page/Login';
import SignUp from './Page/SignUp';
import Students from './Page/Students';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='students' element={<Students></Students>}>

          <Route index element={<ViewStudent></ViewStudent>}></Route>
          <Route path='viewStudent' element={<ViewStudent></ViewStudent>}></Route>
          <Route path='addStudent' element={<AddStudent></AddStudent>}></Route>
        </Route>


      </Routes>

    </div>
  );
}

export default App;
