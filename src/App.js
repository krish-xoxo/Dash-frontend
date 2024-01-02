import React from 'react';
import Login from './Authentication/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Authentication/Signup';
import Dash from './Components/Dash';
import Plans from './Components/Plans';
import Users from './Components/Users';
import Settings from './Components/Settings';
import Userprofile from './Components/userprofile';
import EarningApproval from './Components/EarningApproval';
import Reports from './Components/Reports';
import Log from './Components/Log';
import Group from './Components/Group';
import Data from './Components/Data';
import Metric from './Components/Metric';
import Help from './Components/Help';
import Inbox from './Components/Inbox';
import Analytics from './Components/Analytics';
import Error from './Components/Error';
import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/Dash' element={<Dash />}></Route>
          <Route path='/Plans' element={<Plans />}></Route>
          <Route path='/Users' element={<Users />}></Route>
          <Route path='/Settings' element={<Settings />}></Route>
          <Route path='/EarningApproval' element={<EarningApproval />}></Route>
          <Route path='/Reports' element={<Reports />}></Route>
          <Route path='/Log' element={<Log />}></Route>
          <Route path='/Group' element={<Group />}></Route>
          <Route path='/Data' element={<Data />}></Route>
          <Route path='/Metric' element={<Metric />}></Route>
          <Route path='/Help' element={<Help />}></Route>
          <Route path='/Inbox' element={<Inbox />}></Route>
          <Route path='/Analytics' element={<Analytics />}></Route>
          <Route path='*' element={<Error />}></Route>
          <Route path='/userprofile' element={<Userprofile />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
