import React from 'react';
import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import LogOut from './components/LogOut';
import Test from './components/Test';

const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Navigation />}> 
            <Route path='/logowanie' element={<Login />} />
            <Route path='/rejestracja' element={<Register />} />
            <Route path='/wylogowano' element={<LogOut />} />
          </Route> 
          <Route path='/test' element={<Test />} />
        </Routes>
    </HashRouter>
)
}

export default App;
