import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswdLost from './LoginPasswdLost';
import LoginPasswdReset from './LoginPasswdReset';
import styles from './css/Login.module.css';
import NotFound from '../NotFound';
import { useSelector } from 'react-redux';
import Loading from '../Helper/Loading';
const Login = () => {
  const { data, loading } = useSelector((state) => state.user);

  if (loading) return <Loading />;
  if (data) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPasswdLost />} />
          <Route path="reset" element={<LoginPasswdReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
