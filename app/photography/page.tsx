'use client';
import type { NextPage } from 'next';
import styles from './Photography.module.scss';
import {portfolioImages} from '../_data/images';
import Image from 'next/image';
import { useContext } from 'react';
import { HeaderContext } from '../layout';

const Photography: NextPage = () => {

    const { headerHeight } = useContext(HeaderContext);
    const loadingStatus: boolean[] = [];

    const renderImages = () => {
        let index = 0;
        return portfolioImages.map((image) => {
            loadingStatus.push(true);
            return (
                <div className={`relative overflow-hidden rounded-xl ${image.includes("Vertical") ? styles.verticalImg : ''}`} key={index++}>
                    <div className={`${loadingStatus[index] ? 'block' : 'hidden'} absolute w-full h-full top-0 right-0 bg-dark ${styles.photoLoading}`}></div>
                    <Image fill style={{objectFit: 'cover'}} src={image} alt={image.toString()} loading="lazy" onLoad={() => loadingStatus[index] = false}></Image>
                </div>
            )
        })
    }

    return (
        <main className='bg-dark w-full h-full md:max-w-screen-xl mx-auto' style={{marginTop: headerHeight}}>
            <section className={styles.portfolio}>
                {renderImages()}
            </section>
        </main>
    );
};
export default Photography;
