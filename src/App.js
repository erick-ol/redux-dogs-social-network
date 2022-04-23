import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import User from './Components/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo';
import UserProfile from './Components/User/UserProfile';
import { useDispatch } from 'react-redux';
import { autoLogin } from './store/user';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              exact
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
      </BrowserRouter>
    </div>
  );
};

export default App;
