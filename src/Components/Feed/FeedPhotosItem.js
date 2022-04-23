import React from 'react';
import { useDispatch } from 'react-redux';
import Image from '../Helper/Image';
import styles from './css/FeedPhotosItem.module.css';
import { openModal } from '../../store/ui';
import { fetchPhoto } from '../../store/photo';

const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  };

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
