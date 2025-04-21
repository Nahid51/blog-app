import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span>Hey, Your Blog is here!</span> Discover your stories and creative ideas.
            </h2>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="cover" fill />
                </div>
                <div className={styles.textContainer}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, hic.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magni eveniet assumenda illum, perferendis quam enim eos eum omnis ad! Reprehenderit ad sunt dicta sequi nesciunt accusantium quisquam, minus nisi.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;