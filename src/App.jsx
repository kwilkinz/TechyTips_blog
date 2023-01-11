import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Single from './pages/Single/Single'
import Write from './pages/Write/Write'
import Settings from './pages/UserSettings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const App = () => {
  const user = true
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Home /> } />
        <Route path='/register' element={user ? <Home/> : <Register /> } />
        <Route path='/login' element={user ? <Home/> : <Login /> } />
        <Route path='/write' element={user ? <Write/> : <Register /> } />
        <Route path='/settings' element={user ? <Settings/> : <Register /> } />
        <Route path='/post/:postId' element={<Single /> } />
      </Routes>
    </div>
  );
};

export default App;
