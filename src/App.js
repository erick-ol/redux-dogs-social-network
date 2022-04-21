import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import { UserStorage } from './Context/UserContext';
import User from './Components/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo';
import UserProfile from './Components/User/UserProfile';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="account/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
