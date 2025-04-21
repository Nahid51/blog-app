import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Link href="/">
                    <Image src="/facebook.png" alt="logo" width={24} height={24} />
                </Link>
                <Link href="/">
                    <Image src="/instagram.png" alt="logo" width={24} height={24} />
                </Link>
                <Link href="/">
                    <Image src="/youtube.png" alt="logo" width={24} height={24} />
                </Link>
                <Link href="/">
                    <Image src="/tiktok.png" alt="logo" width={24} height={24} />
                </Link>
            </div>
            <div className={styles.logo}>YourBlog</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/about" className={styles.link}>About</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
                <AuthLinks />
            </div>
        </div>
    )
};

export default Navbar;