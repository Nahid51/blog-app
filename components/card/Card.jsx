import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt='photo' fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.12.2024 - </span>
                    <span className={styles.category}>Culture</span>
                </div>
                <Link href="/">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, ratione?</h2>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid perferendis recusandae maxime molestias eos ipsa, nobis consectetur sequi beatae quasi facilis nisi odio. Blanditiis odit mollitia, nobis odio suscipit repellat!</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
};

export default Card;