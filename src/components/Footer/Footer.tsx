import { FC } from 'react';
import styles from './Footer.module.scss';
import Container from '@mui/material/Container';
import { GitHub } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="xl">
        <div className={styles.wrapper}>
          <div className={styles.footer__top}>
            <div>FINEART | {new Date().getFullYear()}</div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer__bottom}>
            <ul>
              <li>
                <a href="https://github.com/dstrizhakov" target="_blank" rel="noopener noreferrer">
                  <GitHub />
                  <span>dstrizhakov</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/mardon07" target="_blank" rel="noopener noreferrer">
                  <GitHub />
                  <span>mardon07</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/webj0ker" target="_blank" rel="noopener noreferrer">
                  <GitHub />
                  <span>webj0ker</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
