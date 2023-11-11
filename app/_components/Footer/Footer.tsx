import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import React, { useContext } from 'react';
import { SiteData } from '../../_data/information';
import { SiteDataContext } from '../../layout';

export interface IFooterProps {}

const Footer = ({}: IFooterProps) => {
  const siteData = useContext(SiteDataContext);

  return (
    <footer className='w-full px-4 py-28'>
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 text-2xl font-bold'>
        <div className="flex items-center justify-center gap-2 font-bold">
          <FontAwesomeIcon icon={siteData.footer.copyrightIcon}></FontAwesomeIcon>
          {siteData.footer.copyrightText || siteData.personalInfo.name} 2023
        </div>
      </div>
    </footer>
  );
};
export default Footer;
