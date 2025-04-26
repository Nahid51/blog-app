"use client"
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";

const LoginPage = () => {
    const { status } = useSession();

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (status === "authenticated") {
        window.location.href = "/";
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <button className={styles.socialButton} onClick={() => signIn("google")}>
                    Sign in with Google
                </button>
                <button className={styles.socialButton}>Sign in with Github</button>
                <button className={styles.socialButton}>Sign in with Facebook</button>
            </div>
        </div>
    )
}

export default LoginPage;