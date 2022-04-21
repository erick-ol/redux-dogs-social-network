import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import styles from './css/UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end>
          <MyPhotos />
          {mobile && 'My Photos'}
        </NavLink>
        <NavLink to="/account/stats">
          <Stats />
          {mobile && 'Stats'}
        </NavLink>
        <NavLink to="/account/post">
          <AddPhoto />
          {mobile && 'Add Photo'}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && 'Logout'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
