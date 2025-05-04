import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ item }) => {
    return (
        <div className={styles.container}>
            {item?.img &&
                <div className={styles.imgContainer}>
                    <Image src={item?.img} alt='photo' fill sizes="100%" priority />
                </div>
            }
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{item?.createdAt?.slice(0, 10)} - </span>
                    <span className={styles.category}>{item?.catSlug.charAt(0).toUpperCase() + item.catSlug.slice(1)}</span>
                </div>
                <Link href={`/posts/${item?.slug}`}>
                    <h2>{item?.title}</h2>
                </Link>
                <p>{item?.desc?.slice(0, 60)}</p>
                <Link href={`/posts/${item?.slug}`} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
};

export default Card;