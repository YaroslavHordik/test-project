import React from 'react';
import { menu } from './menu';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
  const navigate = useNavigate(); //Роутинг с помощью хука --
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="https://cdn.svgporn.com/logos/openjs-foundation-icon.svg" alt="" height="100" />
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item, index) => (
            <li key={`menu item ${index}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button className={styles.loginButton} onClick={() => navigate('/about')}>
            Login
          </button>
          <button className={styles.signUp}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
