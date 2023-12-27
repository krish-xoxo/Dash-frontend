import React from 'react';
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Dash from './Dash';
import Plans from './Plans';
import Users from './Users';
import Settings from './Settings';
import Userprofile from './userprofile';
import EarningApproval from './EarningApproval';
import Reports from './Reports';
import Log from './Log';
import Group from './Group';
import Data from './Data';
import Metric from './Metric';

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
            <Route path='/EarningApproval' element={<EarningApproval />}></Route>
            <Route path='/Reports' element={<Reports />}></Route>
            <Route path='/Log' element={<Log />}></Route>
            <Route path='/Group' element={<Group />}></Route>
            <Route path='/Data' element={<Data />}></Route>
            <Route path='/Metric' element={<Metric />}></Route>
        </Routes>
    </BrowserRouter>
  )
}
export default App
