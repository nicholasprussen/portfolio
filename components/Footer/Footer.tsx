import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import React from 'react';

export interface IFooterProps {}

const Footer = ({}: IFooterProps) => {
  return (
    <footer className='w-full px-4 py-28'>
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 text-2xl font-bold'>
        <div className="flex items-center justify-center gap-2 font-bold">
          <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
          Nicholas Prussen 2023
        </div>
      </div>
    </footer>
  );
};
export default Footer;
