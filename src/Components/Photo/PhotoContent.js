import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import Image from '../Helper/Image';
import styles from './css/PhotoContent.module.css';
import PhotoComments from './PhotoComments';
import PhotoDelete from './PhotoDelete';

const PhotoContent = ({ single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = useSelector((state) => state.photo.data);

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <p className={styles.author}>
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
          )}
          <span className={styles.views}>{photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photo.peso} kg</li>
          <li>
            {photo.idade} {photo.idade === '1' ? 'year' : 'years'}
          </li>
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
};

export default PhotoContent;
