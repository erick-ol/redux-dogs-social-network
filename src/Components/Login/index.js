import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswdLost from './LoginPasswdLost';
import LoginPasswdReset from './LoginPasswdReset';
import styles from './css/Login.module.css';
import NotFound from '../NotFound';
const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
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
