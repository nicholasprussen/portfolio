'use client';
import { useContext } from "react";
import { HeaderContext, WindowContext } from "./layout";
import styles from "./404.module.scss";
import Button from "./_components/Button/Button";

const Page404 = () => {
    const { dimensions } = useContext(WindowContext);
    const { headerHeight } = useContext(HeaderContext);

    return (
        <main className="w-100 flex flex-col justify-center items-center" style={{height: dimensions.height - headerHeight}}>
            <div className="mb-32 px-4">
                <h1 className={`${styles.heading} pb-1 text-[1.5rem] sm:text-[2rem] md:text-[3rem]`}>How&lsquo;d you get here?</h1>
                <p className="pt-1">404 - Page Not Found</p>
            </div>
            <Button onClick={() => {}} buttonText="Take me back please!" linkHref="/"></Button>
        </main>
    )
}
 
export default Page404;