import type { NextPage } from 'next';
import { useContext } from 'react';
import { WindowContext } from '../_app';
import styles from './years.module.scss';

const years: NextPage = () => {

    const { dimensions } = useContext(WindowContext);

    const yearRows = 100;
    const dayColumns = 365;

    const getRandomRbg = () => {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    const renderYears = () => {
        console.log(dimensions)
        if (dimensions.width === 0 || dimensions.height === 0)
            return <></>;
        const columnWidth = (dimensions.width - 24) / dayColumns;
        const rowHeight = (dimensions.height - 24) / yearRows;
        let dayKey = 0;
        let yearKey = 0;
        let yearRowsJSX = [];
        for (let i = 0; i < yearRows; i++) {
            let dayColumnsJSX = [];
            for (let j = 0; j < dayColumns; j++) {
                dayColumnsJSX.push(<div style={{height: rowHeight, width: columnWidth, backgroundColor: getRandomRbg()}} key={dayKey++}></div>)
            }
            yearRowsJSX.push(<div className='w-fit h-full flex' key={yearKey++}>{dayColumnsJSX}</div>)
        }
        return yearRowsJSX;
    }

    return (
        <div className='w-full h-fit flex flex-col justify-center items-center'>
            {renderYears()}
        </div>
    );
};
export default years;
