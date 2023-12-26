import React from 'react';
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Dash from './Dash';
import Plans from './Plans';
import Users from './Users';
import Settings from './Settings';
import Userprofile from './userprofile';

function App(){
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Login />} ></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/Dash' element={<Dash />}></Route>
            <Route path='/plans' element={<Plans />}></Route>
            <Route path='/Users' element={<Users />}></Route>
            <Route path='/userprofile' element={<Userprofile />}></Route>
            <Route path='/Settings' element={<Settings />}></Route>
        </Routes>
    </BrowserRouter>
  )
}
export default App
