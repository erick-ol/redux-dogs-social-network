import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Context/UserContext';
import Error from '../Helper/Error';
import styles from './css/LoginForm.module.css';
import stylesBtn from '../Forms/css/Button.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Sign in" description="Sign in page." />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Sign in</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.lost} to="/login/lost">
        Forgot your password?
      </Link>
      <div className={styles.signup}>
        <h2 className={styles.subtitle}>Sign Up</h2>
        <p>Don't have an account yet? Sign up now!</p>
        <Link className={stylesBtn.button} to="/login/create">
          Sign up
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
