import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="logo" width={24} height={24} />
                <Image src="/instagram.png" alt="logo" width={24} height={24} />
                <Image src="/youtube.png" alt="logo" width={24} height={24} />
                <Image src="/tiktok.png" alt="logo" width={24} height={24} />
            </div>
            <div className={styles.logo}>YourBlog</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/">Home</Link>
                <Link href="/">Contact</Link>
                <Link href="/">About</Link>
                <AuthLinks />
            </div>
        </div>
    )
};

export default Navbar;