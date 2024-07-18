import React from 'react';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router';
import PrivateRoute from './utilits/router/PrivateRoute';
import AuthRootComponent from './components/auth/AuthRootComponent';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="login" element={<AuthRootComponent />} />
        <Route path="register" element={<AuthRootComponent />} />

      </Routes>
    </div>
  )
}

export default App
