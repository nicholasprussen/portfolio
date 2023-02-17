import { useContext } from "react";
import { HeaderContext, WindowContext } from "./_app";
import styles from "./404.module.scss";
import { Button } from "../components";


const Page404 = () => {

    const { dimensions } = useContext(WindowContext);
    const { headerHeight } = useContext(HeaderContext);

    return (
        <main className="w-100 flex flex-col justify-center items-center" style={{height: dimensions.height - headerHeight}}>
            <div className="mb-32 px-4">
                <h1 className={`${styles.heading} text-[1.5rem] sm:text-[2rem] md:text-[3rem]`}>How&quot;d you get here?</h1>
                <p className={styles.subHeading}>404 - Page Not Found</p>
            </div>
            <Button onClick={() => {}} buttonText="Take me back please!" linkHref="/"></Button>
        </main>
    )
}
 
export default Page404;