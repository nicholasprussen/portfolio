import type { NextPage } from 'next';
import styles from './Photography.module.scss';
import {portfolioImages} from '../../components/images';
import Image from 'next/future/image';

const Photography: NextPage = () => {

    const renderImages = () => {
        let index = 0;
        return portfolioImages.map((image) => {
            return <img src={image} alt={image.toString()} key={index++} loading="eager" className={`rounded-xl ${image.includes("Vertical") ? styles.verticalImg : ''}`}/>;
        })
    }

    return (
        <main className='bg-dark-accent'>
            <h2 className={`text-2xl 2xs:text-[1.8em] xs:text-[2em] sm:text-[2.5em] md:text-[3em] lg:text-[4em] font-bold text-center lg:mb-24 lg:mt-20 ${styles.lineHeightNormal} ${styles.headingTextShadow}`}>
                My Photographs
            </h2>
            <section className={styles.portfolio}>
                {renderImages()}
            </section>
        </main>
    );
};
export default Photography;
