import React from 'react';
import {
  AiFillCopyrightCircle,
  AiFillEnvironment,
  AiFillClockCircle,
  AiFillMail,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from 'react-icons/ai';
import Logo from '../../../assets/images/logo/logo.jpeg';
import styles from './Footer.module.scss';

const socialMedia = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/_digitalhouse',
    Icon: AiFillTwitterCircle,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/_digitalhouse/',
    Icon: AiFillInstagram,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/digitalhouse.edu',
    Icon: AiFillFacebook,
  },
  {
    name: 'Linkedin',
    link: 'https://ar.linkedin.com/school/digitalhouseschool/',
    Icon: AiFillLinkedin,
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/watch?v=_vHNUjCAbVQ',
    Icon: AiFillYoutube,
  },
];

const basicData = [
  {
    name: 'adress',
    text: 'Monroe 860 - Capital Federal',
    Icon: AiFillEnvironment,
  },
  {
    name: 'schedule',
    text: 'Lunes a viernes de 8:00hs a 22:00hs',
    Icon: AiFillClockCircle,
  },
  {
    name: 'email',
    text: 'admisiones@digitalhouse.com',
    Icon: AiFillMail,
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__social}>
        {socialMedia.map((social) => (
          <div key={social.name} className={styles.social_media}>
            <a className={styles.social_link} href={social.link}>
              <social.Icon />
              <span>{social.name}</span>
            </a>
          </div>
        ))}
      </div>
      <div className={styles.footer__info}>
        {basicData.map((data) => (
          <div key={data.name} className={styles.information}>
            <data.Icon />
            {' '}
            <span>{data.text}</span>
          </div>
        ))}
      </div>
      <div className={styles.footer__copy}>
        <a className={styles.logo_link} href="/">
          <img className={styles.logo_image} src={Logo} alt="dh-logo" />
        </a>
        <div className={styles.copyright}>
          <h4 className={styles.copyright_text}>
            <AiFillCopyrightCircle />
            {' '}
            Copyright
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
