import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswdLost = () => {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('lost', 'reset'),
      });
      request(url, options);
    }
  };
  return (
    <section className="animeLeft">
      <Head title="Lost Password" description="Lost password page." />
      <h1 className="title">Did you lost the password?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Username" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswdLost;
