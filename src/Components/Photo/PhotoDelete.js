import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import styles from './css/PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { request, error, loading } = useFetch();
  const navigate = useNavigate();

  const handleClick = async () => {
    const confirm = window.confirm('Are you sure you want to delete it?');
    if (confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) navigate('/');
    }
  };

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deleting...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Delete
        </button>
      )}
      <Error error={error} />
    </>
  );
};

export default PhotoDelete;
