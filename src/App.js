import React from 'react';
import Login from './Authentication/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Authentication/Signup';
import Dash from './Components/Dash';
import Userprofile from './Components/userprofile';
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
          <Route path='*' element={<Error />}></Route>
          <Route path='/userprofile' element={<Userprofile />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
