import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import FormattedLink from '../FormattedLink/FormattedLink';

export interface IFooterProps {}

const Footer = ({}: IFooterProps) => {
  return (
    <footer className='w-full px-4 py-28'>
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 text-2xl font-bold'>
        <div className="flex items-center justify-center gap-2 font-bold">
          <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
          Nicholas Prussen 2023
        </div>
        <div className={styles.separatingBar}></div>
        <FormattedLink href={'/contact'}>
          Contact Me
        </FormattedLink>
      </div>
    </footer>
  );
};
export default Footer;
