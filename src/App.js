import logo from './logo.png';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './pages/shared/Header/Header';
import Login from './pages/Login/Login/Login';
import Home from './pages/Home/Home/Home';
import Register from './pages/Login/Register/Register';
import WorkDetails from './pages/WorkDetails/WorkDetails';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Join from './pages/Join/Join';
import AddWork from './pages/AddWork/AddWork';
import ManageWork from './pages/ManageWork/ManageWork';

function App() {
  return (
    <div className="App">
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/work/:workId' element={<WorkDetails />}></Route>
        <Route path='/join/:workId' element={
          <RequireAuth>
            <Join />
          </RequireAuth>
        }></Route>
        <Route path='/addWork' element={
          <RequireAuth>
            <AddWork />
          </RequireAuth>
        }></Route>
        <Route path='/manageWork' element={
          <RequireAuth>
            <ManageWork />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
