import React from 'react';
import styles from './css/UserPhotoPost.module.css';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';
import { useDispatch, useSelector } from 'react-redux';
import { photoPost } from '../../store/photoPost';

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading } = useSelector((state) => state.photoPost);
  const { token } = useSelector((state) => state.token.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);

    dispatch(photoPost({ formData, token }));
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head
        title="Post your photo"
        description="Page that you can post the dog's photo."
      />
      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" name="name" {...name} />
        <Input label="Weight" type="text" name="weight" {...weight} />
        <Input label="Age" type="text" name="age" {...age} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        <Error error={error} />
        {loading ? <Button disabled>Sending...</Button> : <Button>Post</Button>}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
