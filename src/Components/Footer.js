import React from 'react';
import styles from './css/Footer.module.css';
import { ReactComponent as DogsFooter } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <DogsFooter />
      <p>Dogs. Some Rights Reserved</p>
    </div>
  );
};

export default Footer;
