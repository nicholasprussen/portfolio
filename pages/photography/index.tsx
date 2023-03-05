import type { NextPage } from 'next';
import styles from './Photography.module.scss';
import {portfolioImages} from '../../components/images';
import Image from 'next/future/image';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../_app';

const Photography: NextPage = () => {

    const { headerHeight } = useContext(HeaderContext);

    useEffect(() => {
        document.body.style.overflow = 'auto';
    }, [])

    const renderImages = () => {
        let index = 0;
        return portfolioImages.map((image) => {
            return (
                <div className={`relative overflow-hidden rounded-xl ${image.includes("Vertical") ? styles.verticalImg : ''}`} key={index++}>
                    <Image fill src={image} alt={image.toString()} loading="lazy"></Image>
                </div>
            )

            // return <Image fill={} src={image} alt={image.toString()} key={index++} loading="lazy" className={`rounded-xl ${image.includes("Vertical") ? styles.verticalImg : ''}`}/>;
        })
    }

    return (
        <main className='bg-dark' style={{marginTop: headerHeight}}>
            <div className={`text-5xl font-bold text-center my-2`}>
                Photos
            </div>
            <section className={styles.portfolio}>
                {renderImages()}
            </section>
        </main>
    );
};
export default Photography;
