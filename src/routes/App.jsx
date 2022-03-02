import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';
import '../styles/global.css';

export const App = () => {
  return (
    <Router>
      <Routes>
       <Layout >
        {/* <Route exact path="/" element={<Home />}/> */}
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/recovery-password" element={<RecoveryPassword />}/>
        {/* <Route element={<NotFound />}/> */}
       </Layout>
      </Routes>
    </Router>
  )
}
